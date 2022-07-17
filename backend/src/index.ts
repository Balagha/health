import {AppDataSource} from "./data-source"
import * as express from "express"
import * as BodyParser from "body-parser"
import router from "./routes/routers";

const app =express();

AppDataSource.initialize().then(async () => {
    app.use(BodyParser.json());
    //app.use('/api', router);
    app.get('/', (req, res) => {
	  res.send('Hello World!')
	})
    app.listen(8080, () => console.log("app is listen at port 8080"));
}).catch(console.log)
