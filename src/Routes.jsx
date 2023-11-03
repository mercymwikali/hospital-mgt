import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import MainLayout from "./components/MainLayout";
import Error from "./pages/Error";
import SignUp from "./pages/SignUp";
import Forgetpassword from "./pages/Forgetpassword";
import Resetpassword from "./pages/Resetpassword";
import Dashboard from "./pages/Dashboard";
import PatientReg from "./pages/PatientReg";
import Patientlist from "./pages/Patientlist";
import AddAppointment from "./pages/AddAppointment";
import Appointmentlist from "./pages/Appointmentlist";
import Dispatchedlist from "./pages/Dispatchedlist";

function AppRoutes(params) {

    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/forgetPassword" element={<Forgetpassword />} />
                <Route path="/resetPassword" element={<Resetpassword />} />
                <Route path="!*" element={< Error />} />
                <Route path="/" element={<MainLayout />} >
                    <Route index element={<Dashboard />} />
                    <Route path="/addPatient" element={<PatientReg />} />
                    <Route path="/patient-list" element={<Patientlist />} />
                    <Route path="/add-appointment" element={<AddAppointment />} />
                    <Route path="/appointment-list" element={<Appointmentlist />} />
                    <Route path="/dispatched-list" element={<Dispatchedlist />} />
                </Route>
            </Routes>
        </Router>
    )
}
export default AppRoutes;