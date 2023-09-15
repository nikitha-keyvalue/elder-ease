import { ThemeProvider } from "@emotion/react";

import theme from "./theme";
import { Navigate, Route, Routes } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import HealthRecords from "./pages/HealthRecords/HealthRecords";
import RegisterPage from "./pages/RegisterPage/Register";
import ServiceDetails from "./pages/Home/components/ServiceDetails";
import Home from "./pages/Home";

import './App.css'
import MyBookings from "./pages/MyBookings";
import ViewBooking from "./pages/MyBookings/components/ViewBooking";
import ViewCompletedBooking from "./pages/MyBookings/components/ViewCompletedBooking";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path={"/elder-buddy/register"} element={<RegisterPage />} />
        <Route path={"/elder-buddy/profile"} element={<ProfilePage />} />
        <Route
          path={"/elder-buddy/health-records"}
          element={<HealthRecords />}
        />
        <Route path={"/elder-buddy/home"} element={<Home />} />
        <Route path={"/elder-buddy/home/service-details"} element={<ServiceDetails />} />
        <Route path={"/elder-buddy/my-bookings"} element={<MyBookings />} />
        <Route path={"/elder-buddy/view-booking/1"} element={<ViewBooking />} />
        <Route path={"/elder-buddy/view-booking/2"} element={<ViewCompletedBooking />} />
        <Route path="*" element={<Navigate to="/elder-buddy/register" />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
