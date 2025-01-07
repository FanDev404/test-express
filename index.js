const indexRouter = require("./routes/index");
const apiRouter = require("./routes/api");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter)
app.use("/api", apiRouter)

app.all("*", function(req, res) {
    return res.status(404).json({
	status: false,
	data: {},
	msg: "Page not found",
    })
})

app.listen(PORT, () => {
    console.log("Server running on port : " + PORT)
})

module.exports = app;
