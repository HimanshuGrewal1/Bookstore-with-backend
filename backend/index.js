// const express = require('express')
// const app = express()
// const port = 3000
// const cors=require("cors");
// const mongoose = require('mongoose');
// require('dotenv').config()

// app.use(express.json());
// app.use(cors({
//    origin:['http://localhost:5173'],
//    credentials:true
// }))
// const bookroutes=require('./src/books/book.route')
// const ordersroutes=require('./src/orders/order.route')
// const userroutes=require('./src/users/user.route')
// const adminroutes=require('./src/stats/stats.modle')
// app.use("/api/books",bookroutes)
// app.use("/api/orders",ordersroutes)
// app.use("/api/auth",userroutes)
// app.use("/api/admin",adminroutes)
// async function main() {
//     await mongoose.connect(process.env.DB_url);
//     app.get('/', (req, res) => {
//         res.send('Hello World!')
//       })
//   }

//   main().then(()=>console.log("hdsdsd")).catch(err => console.log(err));

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

// //XkbnZkDNhb1fh3aD


const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
   origin: ["http://localhost:5173",'https://bookstore-three-rose.vercel.app/'],
   credentials: true
}));

// Import Routes
const bookroutes = require('./src/books/book.route');
const ordersroutes = require('./src/orders/order.route');
const userroutes = require('./src/users/user.route');
const adminroutes = require('./src/stats/stats.modle');

// Use Routes
app.use("/api/books", bookroutes);
app.use("/api/orders", ordersroutes);
app.use("/api/auth", userroutes);
app.use("/api/admin", adminroutes);

// Connect to MongoDB
async function main() {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("✅ MongoDB Connected!");
    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error);
    }
}
main();

// Test Route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Export the app (✅ REQUIRED for Vercel)
module.exports = app;
