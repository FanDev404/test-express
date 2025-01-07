var express = require("express");
var router = express.Router();

router.get("/cekml", async (req, res, next) => {
    res.json({
	    status: true,
	    data: {
            developer: "irfan",
            contact: "089674310267"
        },
	    msg: "Succecs",
    })
}
