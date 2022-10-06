import {AppDataSource} from "./data-source"
import * as express from "express"
import * as BodyParser from "body-parser"
import router from "./routes/routers";
const cors = require('cors')
const app =express();
const cookieParser = require('cookie-parser');

/*
app.use(BodyParser.json());
//app.use('/api', router);
app.get('/api', (req, res) => {
    res.send('Hello World!')
})
app.listen(8080, () => console.log("app is listen at port 8080"));
*/

AppDataSource.initialize().then(async () => {
    app.use(BodyParser.json());
    app.use(cookieParser());
    const corsConfig = {
        credentials: true,
        origin: true,
    };
    app.use(cors(corsConfig));
    app.use('/api', router);
    app.use('/auth',router);
    /*app.get('/', (req, res) => {
	  res.send('Hello World!')
	})*/
    app.listen(8081, () => console.log("app is listen at port 8081"));
}).catch(console.log)
