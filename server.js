const fs = require('fs');
const express = require('express');
const multer = require('multer');
const cors = require('cors');

const app = express();

app.use(function(request, response, next){
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();

    let data = `${hour}:${minutes}: ${request.url}`;

    fs.appendFile("server.log", data + "\n", function(){});
    next();
});

app.use(function (request, response,next) {

    let path = 'src/uploads/images';

    if (!fs.existsSync(path)){
        fs.mkdirSync(path);
    };

    next();
});

app.use(cors());

const storage = multer.diskStorage( {

    destination: (request,file,cb) => {
        let path = 'src/uploads/images';

        cb(null, {path});
    },
    filename: (request,file,cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer ( { storage:storage}).array('file');

app.post("/api/upload", (request,response) => {

    upload (request,response, (error) => {
        if (error instanceof multer.MulterError) {
            return response.status(500).json(error)
        }
        else if (error) {
            return response.status(500).json(error)
        }
        return response.status(200).send(request.file)
    })
});

app.listen(3005);
