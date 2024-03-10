import { CSSProperties } from "react";

export const Loading = () => {
  const loadStyle: CSSProperties = {
    marginTop: "100px",
    fontSize: "2rem",
    textAlign: "center",
  };

  return <div style={loadStyle}>Loading...</div>;
};
