import React from "react";
import IDK from "./images/idk.gif";
import sigma from "./images/sigmabek.gif";

const PageNotFound = () => {
  return (
    <div style={{ textAlign: "center", paddingTop: "50px" }}>
      {/* <img src={IDK} alt="" style={{ display: "block", margin: "0 auto" }} /> */}
      <img src={sigma} alt="" style={{ display: "block", margin: "0 auto" }} />
      <h1 style={{ fontSize: "2em", color: "purple" }}>
        404 - Страница не найдена
      </h1>
      <p style={{ color: "#333" }}>
        Извините, страница, которую вы ищете, может быть в другом замке.
      </p>
    </div>
  );
};

export default PageNotFound;
