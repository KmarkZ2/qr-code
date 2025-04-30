import React from "react";

import { QRCodeSVG } from "qrcode.react";
import { SCAN_DATA } from "./../constants";

export const ScanHistory = () => {
  const data = JSON.parse(localStorage.getItem(SCAN_DATA));

  return (
    <div>
      {data.map((el, index) => {
        return (
          <React.Fragment key={index}>
            <p>
              <a href={el}>{el}</a>
            </p>
            <QRCodeSVG value={el} />
          </React.Fragment>
        );
      })}
    </div>
  );
};
