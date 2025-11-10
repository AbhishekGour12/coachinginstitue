import express from 'express';
import { getUserProfile, loginUser, registerUser } from '../controllers/AuthController.js';


const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/:token', getUserProfile );

export default router;