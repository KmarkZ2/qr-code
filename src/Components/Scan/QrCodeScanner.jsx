import { Scanner } from "@yudiel/react-qr-scanner";
import { useState } from "react";

import s from "./QrCodeScanner.module.css";

import { SCAN_DATA } from "./../../constants";

export const QrCodeScanner = () => {
  const [value, setValue] = useState("");

  const scanHandler = (result) => {
    setValue(result[0].rawValue);

    const prevData = JSON.parse(localStorage.getItem(SCAN_DATA)) || [];

    if (prevData.includes(result[0].rawValue)) return;

    localStorage.setItem(
      SCAN_DATA,
      JSON.stringify([...prevData, result[0].rawValue])
    );
  };

  const copyResult = (e) => {
    const text = value;
    navigator.clipboard.writeText(text).then(() => {
      alert("Посилання скопійовано!");
    });
  };

  const settings = {
    audio: false,
    finder: false,
  };

  return (
    <div className={s.container}>
      <div className={s.containerBackground}>
        <div className={s["camera-preview"]}>
          <Scanner
            className={s["scan-frame"]}
            allowMultiple={true}
            onScan={scanHandler}
            components={settings}
            styles={{
              container: { width: "100%" },
            }}
            constraints={{
              width: { ideal: 1920 },
              height: { ideal: 1080 },
            }}
          />
        </div>

        {value && (
          <>
            <div className={s["result-box"]} id="result">
              <a href={value} target="_blank" rel="noopener noreferrer">
                {value}
              </a>
            </div>
            <button className={s["copy-button"]} onClick={copyResult}>
              Скопіювати
            </button>
          </>
        )}
      </div>
    </div>
  );
};
