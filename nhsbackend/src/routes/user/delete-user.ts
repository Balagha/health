import {Router} from "express";
import {UserInfo} from "../../entity/user-info";
const router = Router();

router.delete('/api/user/:id', async (req, res) => {
    //return req;
    const {id} = req.params;
    const response = await UserInfo.delete(parseInt(id));
    return res.json(response);
});

export { router as deleteUserRouter }