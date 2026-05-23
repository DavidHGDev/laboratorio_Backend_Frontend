import { getUser, createUser } from "./user.js";
import { Router } from "express";

const router = Router();

router.get('/user', getUser);

export default router;