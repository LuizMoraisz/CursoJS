import { Router } from "express";
import userController from "../controllers/UserController";

import loginRequired from "../middlewares/loginRequired";

const router = new Router();

//router.get("/", loginRequired, userController.index);
//router.get("/:id", userController.show);

router.post("/", userController.store);
router.put("/", loginRequired, userController.update);
router.delete("/", loginRequired, userController.delete);

export default router;

/*

index => Lista todos os usuarios = get
store/creatte => Cria um novo usuario = post
delete => apaga um usuario = delette
show => mostra um usuario = get
update => atualiza um usuario = path ou put

*/
