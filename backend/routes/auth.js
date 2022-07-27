import express from "express";
import { GoogelSignIn } from "../controllers/auth.js";

const router = express.Router();


router.post('/google/signin', GoogelSignIn);



export default router;