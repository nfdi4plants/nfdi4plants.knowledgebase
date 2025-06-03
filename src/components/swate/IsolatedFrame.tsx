import { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";

export default function IsolatedFrame({ children, ...props }: { children: React.ReactNode }) {
  const ref = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (ref.current && ref.current.contentDocument) {
      createRoot(ref.current.contentDocument.body).render(children);
    }
  }, []);

  return (
    <iframe
      ref={ref}
      className="border rounded-md"
      style={{ width: "100%", height: "fit-content", minHeight: "600px" }}
      {...props}
    />
  );
}