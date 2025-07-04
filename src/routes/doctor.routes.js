const express = require('express');
const router = express.Router();
const doctorController = require('../modules/doctor/doctor.controller');
const authMiddleware = require('../middleware/auth.middleware');

// All doctor routes require authentication
router.use(authMiddleware);

// Doctor management routes
router.post('/create-doctor' ,doctorController.createDoctor);
router.get('/', doctorController.listDoctors);
router.get('/:id', doctorController.getDoctorDetails);
router.put('/update-doctor', doctorController.updateDoctorDetails);
router.put('/schedules', doctorController.updateDoctorSchedule);
// add delete doctor route::

module.exports = router;