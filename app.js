let express = require('express')
let cors = require('cors')
let app = express()

// If port is set in environment variable use that port
// if not, use port 5000
const PORT = process.env.PORT || 5000

// Enable CORS middleware
app.use(cors());
// Enable receiving data in JSON format
app.use(express.json());
// Enable receiving data from HTML forms
app.use(express.urlencoded({ extended: false }));

app.get("/items", function(req, res){
res.json({
    "items": [
      { "id": 1, "name": "Apples",  "price": "$2" },
      { "id": 2, "name": "Peaches", "price": "$5" }
    ] 
  });
});

app.listen(PORT, function () {
    console.log("Server started...")
});