const express=require('express');
const { adminController } = require('../../controllers/admin/adminController');
const adminRoute=express.Router();

adminRoute.post('/admin/save_students',adminController)
exports.adminRoute=adminRoute;