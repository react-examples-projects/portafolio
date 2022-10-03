import A from "atropos";
import { useEffect } from "react";

export default function Atropos({ children, ...props }) {
  useEffect(() => {
    const atropos = A({
      el: ".my-atropos",
      highlight: false,
    });

    return () => atropos.destroy();
  }, []);

  return (
    <div className="atropos my-atropos" {...props}>
      <div className="atropos-scale">
        <div className="atropos-rotate">
          <div className="atropos-inner">{children}</div>
        </div>
      </div>
    </div>
  );
}