
const express =require('express');

const app = express();
const userController = require("./controller/user.controller");
const {register,login} = require("./controller/auth.controller")
const productController = require("./controller/product.controller");
const passport =require("./config/google.auth")
app.use(express.json());

app.use("/user",userController);
app.use("/products",productController);

app.post("/register",register);
app.post("/login",login);


app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile',"email"] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

module.exports = app;