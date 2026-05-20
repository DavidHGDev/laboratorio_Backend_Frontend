import { getUser } from "./user.routes.js";
import { Router } from 'express';

const router = Router();

router.get('/user', getUser);

export default router;