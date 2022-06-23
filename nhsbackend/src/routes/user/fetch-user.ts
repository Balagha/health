import {Router} from "express";
import {UserInfo} from "../../entity/user-info";

const router = Router();

router
    .get('/api/user/:id', ({params}, res) =>
        UserInfo.findOneBy({id: parseInt(params.id)}).then(res.json));

export {router as fetchUserRouter};