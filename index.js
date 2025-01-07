const express = require('express')
const app = express()

app.get("/", (req, res) => {
    //console.log("Just got a request!")
    res.send("yo")
})

app.get("/api", (req, res) => {
    //console.log("Just got a request!")
    res.send("ok")
})

app.listen(process.env.PORT || 3000)
