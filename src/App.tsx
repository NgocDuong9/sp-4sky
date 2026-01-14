import { BrowserRouter, Routes, Route } from "react-router-dom";
import SkyLayout from "./pages/Layout";
import AccountOverview from "./pages/AccountOverview";
import DeviceManager from "./pages/DeviceManager";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SkyLayout />}>
          <Route path="/" element={<AccountOverview />} />
          <Route path="/device-manager" element={<DeviceManager />} />
          <Route
            path="/viewer"
            element={<div className="text-white">4D Viewer - Coming Soon</div>}
          />
          <Route
            path="/leaderboards"
            element={
              <div className="text-white">Leaderboards - Coming Soon</div>
            }
          />
          <Route
            path="/network"
            element={
              <div className="text-white">Network Status - Coming Soon</div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
