import React from "react";
import MoonLoader from "react-spinners/MoonLoader";

export default function PageLoader() {
  return (
    <div className="vh-100 w-100 d-flex justify-content-center align-items-center">
      <MoonLoader loading={true} size={90} />
    </div>
  );
}
