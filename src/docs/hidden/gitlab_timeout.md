
# Time-out issues with git-LFS

## Error

When trying to push large volumes the DataHUB (large total volume of ARC or large individual files), one sometimes runs into the following error:

```bash
Uploading LFS objects:
...
i/o timeout error: failed to push some refs to 'https://git.nfdi4plants.org/<user>/<arc>.git'
```

## Possible Solution

[Joey](https://github.com/j-bauer) provided the following bash script as a workaround.
This script pushes the LFS objects step by step.

:warning: note that files need to have been tracked and added for this to work


```bash
#!/bin/bash

if [ ! -d ".git" ]; then
        echo "Current directory '$PWD' does not appear to be a git repository."
        exit 1
fi

branch_name="origin"

while read -r name oid _; do
        echo "Processing: $name ($oid)"
        git commit "$name" -m "Adding: $name"
        git lfs push --object-id origin "$oid"
        git push
done < <( git lfs ls-files -l | awk '{print $3, $1}' )
```


## Usage

Store script (e.g. within ARC's root) as lfs-single-push.sh and execute via

```bash
bash lfs-single-push.sh
```