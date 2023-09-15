import { ThemeProvider } from "@emotion/react";

import theme from "./theme";
import { Navigate, Route, Routes } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import HealthRecords from "./pages/HealthRecords/HealthRecords";
import RegisterPage from "./pages/RegisterPage/Register";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path={"/elder-ease/register"} element={<RegisterPage />} />
        <Route path={"/elder-ease/profile"} element={<ProfilePage />} />
        <Route
          path={"/elder-ease/health-records"}
          element={<HealthRecords />}
        />
        <Route path="*" element={<Navigate to="/elder-ease/register" />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
