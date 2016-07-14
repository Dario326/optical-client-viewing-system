const users = require(`./users`);
const pictures = require(`./pictures`);

module.exports = {
    postUsers(req, res, next){
        new users(req.body).save( (err, newUser) =>{
            if(err){
                return res.status(500).json(err);
            }
            return res.status(201).json(newUser)
        })
    },
    getUsers(req, res, next){
        users.find({}, (err, users) =>{
             if(err){
                return res.status(500).json(err);
            }
            return res.status(200).json(users)
        })
    },
    getOneUser(req, res,next) {
        users.findById( req.params.id, (err, user) => {
            if(err){
                return res.status(500).json(err)
            }
                return res.status(200).json(user)
            })
        
    },
    deleteOneUser(req, res, next){
        users.findByIdAndRemove(req.params.id, (err, deletedUser) =>{
             if(err){
                return res.status(500).json(err);
            }
            return res.status(200).json(deletedUser)
        })
    },
    updateUser(req, res, next){
        users.findByIdAndUpdate(req.params.id, req.body, (err, user) =>{
             if(err){
                return res.status(500).json(err);
            }
            return res.status(200).json(user)
        })
    },
    postPictures(req, res, next){
        new pictures(req.body).save( (err, newPicture) =>{
            if(err){
                return res.status(500).json(err);
            }
            return res.status(201).json(newPicture)
        })
    },
    getPictures(req, res, next){
        pictures.find({}, (err, pictures) =>{
             if(err){
                return res.status(500).json(err);
            }
            return res.status(200).json(pictures)
        })
    },
    getOnePicture(req, res,next) {
        pictures.findById( req.params.id, (err, pictures) => {
            if(err){
                return res.status(500).json(err)
            }
                return res.status(200).json(pictures)
            })
        
    },
    deleteOnePicture(req, res, next){
        pictures.findByIdAndRemove(req.params.id, (err, deletedPicture) =>{
             if(err){
                return res.status(500).json(err);
            }
            return res.status(200).json(deletedPicture)
        })
    },
}