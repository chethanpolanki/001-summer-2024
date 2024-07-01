var express = require("express"),
app = express(),
bodyparser = require("body-parser"),
mongoose = require("mongoose");
var cors = require('cors');
customerModel = require("./models/customers");
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
//app.set("view engine", "ejs");
mongoose.connect('mongodb://127.0.0.1:27017/mydb');
app.get("/", async(req, res) =>{ 
try{
const r = await customerModel.find({});
res.send(r);
//res.render("pages/results", { customers: r });
 }catch(error)
{
res.status(500).send({error});
}
})
app.listen(3000, "localhost", function () {
console.log("server has started");
})