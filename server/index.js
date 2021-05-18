require("./connection");
const express = require("express");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const { PORT } = require("./config/config");
const authRouter = require("./routers/authRouter");
const userRouter = require("./routers/userRouter");
const projectsRouter = require("./routers/projectsRouter");
const {
  clientErrorHandler,
  errorHandler,
} = require("./middlewares/errorsHandling");

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(morgan("dev"));
app.use(cors());
app.use(express.static(__dirname + "/uploads"));
   
// routes middlewares
authRouter(app);
userRouter(app);
projectsRouter(app);

// errors
app.use(clientErrorHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`The server started on PORT: ${PORT}`);
});
