import { AppDataSource } from "./data-source"
import * as express from "express"
import * as BodyParser from "body-parser"
import {createUserRouter} from "./routes/user/create-user"
import {deleteUserRouter} from "./routes/user/delete-user";
import {fetchUserRouter} from "./routes/user/fetch-user";

const app =express();

AppDataSource.initialize().then(async () => {
    app.use(BodyParser.json());
    app.use(createUserRouter);
    app.use(deleteUserRouter);
    app.use(fetchUserRouter);
    app.listen(8080, () => {
        console.log("app is listen at port 8080")
    });
}).catch(error => console.log(error))
