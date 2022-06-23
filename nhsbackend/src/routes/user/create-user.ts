import {Router} from "express";
import {UserInfo} from "../../entity/user-info";
const router = Router();

router.post('/api/user', async (req, res) => {
    const {
        name,
        bloodGroup,
        gender,
        dateOfBirth,
        address,
        contact,
        emergencyContactName,
        emergencyContactNumber,
        officialIdType,
        officialIdNumber
    } = req.body;
    console.log(req.body)

    const user = UserInfo.create({
        name: name,
        bloodGroup: bloodGroup,
        gender: gender,
        dob: dateOfBirth,
        address: address,
        contact: contact,
        emergencyContactName: emergencyContactName,
        emergencyContactNumber: emergencyContactNumber,
        officialIdType: officialIdType,
        officialIdTypeNumber: officialIdNumber
    });

    await user.save();

    return res.json(user);
});

export {
    router as createUserRouter
}