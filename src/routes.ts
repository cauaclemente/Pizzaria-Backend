import { Router } from "express";
import { CreateUserController } from "./controllers/users/CreateUserController";
import { AuthUserController } from "./controllers/users/AuthUserController";

const router = Router();

router.post('/users', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)



export {router}