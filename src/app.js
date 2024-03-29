const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const fileUpload = require('express-fileupload');

const authRoute = require("./routes/auth.route");
const blogRoute = require("./routes/blog.route");
const usertrackRoute = require("./routes/usertrack.route");
const fileRoute = require("./routes/file.route");
const mailRoute = require("./routes/mail.route");

const { httpLogStream } = require("./utils/logger");
const { APP_MODE } = require("./utils/secrets");

const app = express();

app.use(fileUpload());
app.use(express.static("public/images"));
app.use(cors())
app.enable("trust proxy");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(morgan("combined", { stream: httpLogStream }));

app.use("/api/auth", authRoute);
app.use("/api", usertrackRoute, fileRoute, blogRoute, mailRoute, (req, res) => {
  res.status(200).send({
    status: "success",
    data: {
      message: "API working fine",
    },
  });
});

// anah
const path = __dirname + "/views/";
app.use((req, res, next) => {
  if (APP_MODE === "production")
    req.secure ? next() : res.redirect("https://" + req.headers.host + req.url);
  else next();
});
app.use(express.static(path));
app.get("*", function (req, res) {
  res.sendFile(path + "index.html");
});
// anah end

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).send({
    status: "error",
    message: err.message,
  });
  next();
});

module.exports = app;
