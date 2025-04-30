import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

import s from "./qrCodeGenerator.module.css";

import { GENERATE_DATA } from "./../../constants";

export const QrCodeGenerator = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const onClickHandler = () => {
    setResult(value);
    setValue("");
    const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA)) || [];

    if (prevData.includes(value)) return;

    localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData, value]));
  };

  const onChangeHandler = (e) => {
    setValue(e.target.value);
    if (result !== "") setResult("");
  };

  return (
    <div className={s.container}>
      <div className={s.containerBackground}>
        <div className={s["input-group"]}>
          <input
            type="text"
            value={value}
            placeholder="Введіть текст"
            onChange={onChangeHandler}
          />
          <button
            className={s["generate-button"]}
            type="button"
            onClick={onClickHandler}>
            Сгенерувати
          </button>
        </div>
        <div className={s["qr-code"]}>
          {result !== "" && <QRCodeSVG value={result} />}
        </div>
      </div>
    </div>
  );
};
