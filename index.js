const express = require("express");

const {json} = require("body-parser")
const mongoose = require("mongoose")
const session = require("express-session")
const passport = require("passport")
const socketIO = require("socket.io")
const googleStrategy = require("passport-google-oauth").OAuth2Strategy;

const masterRoutes = require("./server/masterRoutes") 
const port = 8054 ;
const app = express();

app.use( json() );
app.use(express.static(`${__dirname}/app`))

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

app.use( passport.initialize());
app.use( passport.session());



const mongooseUrl = "mongodb://localhost/opticalcvs";



masterRoutes(app);

function handleIO(socket){
    function disconnect(){
        console.log("client disconnected")
    }
    
    console.log("client connected");
    
    socket.on("disconnect", disconnect);
    
    socket.on("send message", function(data){
        io.sockets.emit("get message", data)
    })
    
}


mongoose.connect(mongooseUrl);
mongoose.connection.once(`open`, () => {
    console.log(`connected to mongo at ${ mongooseUrl }`)
})



const server = app.listen( port, () =>{
    console.log(`feds are listening on port ${ port }`)
})


const io = require("socket.io").listen(server)

io.on("connection", handleIO)
 
