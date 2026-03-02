from arctrl import ARC, Contract
from arctrl.py.fable_modules.fs_spreadsheet_py.xlsx import Xlsx
from arctrl.py.Contract.contract import DTO

from io import BytesIO
import gitlab

# For a given repository, list all files in the repository using GitLab API
def list_repo_files(project_path: str, branch: str = "main", token: str | None = None) -> list[str]:
    gl = gitlab.Gitlab("https://git.nfdi4plants.org", private_token=token)
    project = gl.projects.get(project_path)

    items = project.repository_tree(ref=branch, recursive=True, all=True)
    return [item["path"] for item in items if item["type"] == "blob"]

# Download a specific file from repository as string using GitLab API
def download_file(project_path: str, file_path: str, branch: str = "main", token: str | None = None) -> str:
    gl = gitlab.Gitlab("https://git.nfdi4plants.org", private_token=token)
    project = gl.projects.get(project_path)

    file = project.files.get(file_path=file_path, ref=branch)
    return file.decode().decode("utf-8")

# Download a specific file from repository as bytes using GitLab API
def download_file_bytes(project_path: str, file_path: str, branch: str = "main", token: str | None = None) -> bytes:
    gl = gitlab.Gitlab("https://git.nfdi4plants.org", private_token=token)
    project = gl.projects.get(project_path)

    file = project.files.get(file_path=file_path, ref=branch)
    return BytesIO(file.decode())

# Fullfill read contract by downloading file according to expected dto type
def handle_read_contract(project_path: str, contract : Contract) -> Contract:
    # cwl files are handled as text
    if contract.DTOType.name.__contains__("CWL"):
        cwl_str = download_file(project_path, contract.Path)
        contract.DTO = DTO(1, cwl_str)
    # isa files are handled as xlsx spreadsheets
    if contract.DTOType.name.__contains__("ISA"):
        xlsx_bytes = download_file_bytes(project_path, contract.Path)
        contract.DTO = DTO(0, Xlsx.from_xlsx_bytes(xlsx_bytes))
    return contract


def download_arc(project_path: str, branch: str = "main", token: str | None = None) -> ARC:
    print ("retreive file paths")
    filepaths = list_repo_files(project_path, branch, token)

    print ("init arc from file paths")
    arc = ARC.from_file_paths(filepaths)

    print ("retreive and fulfill metadata file read contracts")
    contracts = [
        handle_read_contract(project_path, contract) for contract in arc.GetReadContracts()
    ]

    print ("inject metadata from contracts into ARC")
    arc.SetISAFromContracts(contracts)

    return arc

# Set project handle to be read
project_path = "brilator/Facultative-CAM-in-Talinum"

arc = download_arc(project_path)

print ("check correctness of assay identifiers")
print(arc.AssayIdentifiers)