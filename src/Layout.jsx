import { Routes, Route } from "react-router";
import { Navigation } from "./Components/Navigation/Navigation";

import { QrCodeGenerator } from "./Components/Generate/QrCodeGenerator";
import { QrCodeScanner } from "./Components/Scan/QrCodeScanner";
import { ScanHistory } from "./Components/ScanHistory";
import { GenerateHistory } from "./Components/GenerateHistory";

const Layout = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/generate" element={<QrCodeGenerator />} />
        <Route path="/scan" element={<QrCodeScanner />} />
        <Route path="/generateH" element={<GenerateHistory />} />
        <Route path="/scanH" element={<ScanHistory />} />
      </Routes>
    </>
  );
};

export { Layout };
