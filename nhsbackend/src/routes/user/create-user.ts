import {Router} from "express";
import {UserInfo} from "../../entity/user-info";
const router = Router();

router.post('/api/user', async (req, res) => {
    return res.json(await UserInfo.create(req.body).save());
});

export {
    router as createUserRouter
}