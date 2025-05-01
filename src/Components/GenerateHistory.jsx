import React from "react";

import { QRCodeSVG } from "qrcode.react";
import { GENERATE_DATA } from "./../constants";

export const GenerateHistory = () => {
  const data = JSON.parse(localStorage.getItem(GENERATE_DATA)) || [];

  return (
    <div>
      {data.map((el, index) => {
        return (
          <React.Fragment key={index}>
            <p>{el}</p>
            <QRCodeSVG value={el} />
          </React.Fragment>
        );
      })}
    </div>
  );
};
