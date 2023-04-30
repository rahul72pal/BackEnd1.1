const express = require("express")
const app = express();

app.listen(3000, (err)=>{
    if(err){
        console.log("erroror");
    }
    else{
        console.log("sucecess at 3000");
    }
})

app.get('/' , (req , res) =>{
    res.send("hello jee kaise ho srae tum");
})

const mongoose = require("mongoose");


mongoose.connect('mongodb://127.0.0.1:27017/rahuldata',{
    
    // useNewUrlParse: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{console.log("connections udfelluy")})
.catch((err)=>{console.log("not connected eoror" + err);})


const playlsitscema = new mongoose.Schema({
    name: {
        type: String,
      required : true
    },
    ctype : String,
    videos : Number,
    author: String,
    active : Boolean,
    date: {
        type: Date,
        default : Date.now()
    }
})

const Playlist = new mongoose.model("Playlist" ,playlsitscema );

const createDocument = async ()=>{
   
    try{
        const mongoplaylist = new Playlist({
            name: "mongojs......",
            ctype : "backend",
            videos : 40,
            author : "Rahul Pal1",
            active: true,
            
        })
        const jsplaylist = new Playlist({
            name: "javascript.js......",
            ctype : "both",
            videos : 50,
            author : "Rahul Pal2",
            active: true,
            
        })
        const nodeplaylist = new Playlist({
            name: "node.js......",
            ctype : "backend",
            videos : 30,
            author : "Rahul Pal3",
            active: true,
            
        })
    
        const result = await Playlist.insertMany([mongoplaylist,jsplaylist,nodeplaylist]);
        console.log(result);
    }
    catch(e){
        console.log(e);
    }
    
}

createDocument();


