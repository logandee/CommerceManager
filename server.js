const express = require("express");
const app = express();


app.use(express.static(__dirname + '/public/dist/public')); // this is for accessing your Angular app

app.use(express.urlencoded({extended: true}));
app.use(express.json());

require("./server/routes/routes")(app);


app.listen(8000, () => console.log("listening on port 8000"));