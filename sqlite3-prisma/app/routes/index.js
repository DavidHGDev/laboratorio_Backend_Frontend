import { getUser, createUser } from "./user.js";
import { loginAuth } from "./login.js";
import { Router } from "express";

const router = Router();

router.get('/user', getUser);
router.post('/user', createUser);
router.post('/auth', loginAuth);

export default router;