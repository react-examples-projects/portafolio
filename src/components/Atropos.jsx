import A from "atropos";
import { useEffect } from "react";

export default function Atropos({ children, className, ...props }) {
  useEffect(() => {
    const atropos = A({
      el: ".my-atropos",
      highlight: false,
      shadow: false,
      rotateXMax: 20,
      rotateYMax: 20,
    });

    return () => atropos.destroy();
  }, []);

  return (
    <div
      className={`atropos my-atropos${className ? ` ${className}` : null}`}
      {...props}
    >
      <div className="atropos-scale">
        <div className="atropos-rotate">
          <div className="atropos-inner">{children}</div>
        </div>
      </div>
    </div>
  );
}
