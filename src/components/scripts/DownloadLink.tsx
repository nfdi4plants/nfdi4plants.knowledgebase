import React from "react";

interface DownloadLinkProps {
  href: string;
  filename: string;
  children: React.ReactNode;
}

export default function DownloadLink({ href, filename, children }: DownloadLinkProps) {
  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(href);
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);
      alert("Failed to download the file.");
    }
  };

  return (
    <a href="#" onClick={handleClick} style={{ cursor: "pointer" }}>
      {children}
    </a>
  );
}
