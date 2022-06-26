import {Router} from "express";

import user from "./controllers/crud/user";
import doctor from "./controllers/crud/doctor";
import patient from "./controllers/crud/patient"
import prescription from "./controllers/crud/prescription";

const router = Router();

const defaultRoutes = [
    {
        path: '/doctor',
        route: doctor.doctorAvailability,
    },
    {
        path: '/doctor-specialization',
        route: doctor.doctorSpecialization,
    },
    {
        path: '/patient-medical-condition',
        route: patient.patientMedicalCondition,
    },
    {
        path: '/medical-test-report',
        route: patient.medicalTestReport,
    },
    {
        path: '/user',
        route: user,
    },
    {
        path: '/doctor',
        route: doctor.doctor,
    },
    {
        path: '/patient',
        route: patient.patient,
    },
    {
        path: '/prescription',
        route: prescription,
    }
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

export default router;