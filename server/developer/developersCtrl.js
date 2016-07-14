const developers = require("./developers");

module.exports ={
    postdevelopers(req, res, next){
        new developers( req.body ).save( (err, newDeveloper) => {
            if(err) {
                return res.status( 500 ).json( err );
                
            }
            
            return res.status( 201 ).json( newDeveloper );
        })
    },
     
    getdevelopers(req, res, next){
        developers.find( {}, (err, developers) =>{
            if(err){
                return res.status( 500 ).json( err );
            }
            return res.status(200).json(developers);
        })
    },
    getOneDeveloper(req, res,next) {
        developers.findById( req.params.id, (err, developer) => {
            if(err){
                return res.status(500).json(err)
            }
                return res.status(200).json(developer)
            
        })
    },
    deleteOneDeveloper(req, res, next) {
        developers.findByIdAndRemove(req.params.id, (err, deletedDeveloper) =>{
            if(err){
                return res.status(500).json(err)
            }
            return res.status(200).json(deletedDeveloper)
        })
    },  
    updateDeveloper(req, res, next){
        developers.findByIdAndUpdate(req.params.id, req.body.name , (err, developer) =>{
            if(err){
                return res.status(500).json(err)
            }
            return res.status(200).json(developer)
        })
    },
   
}