const developersCtrl = require("./developersCtrl");



module.exports = app => {
    app.post( `/api/developers`, developersCtrl.postdevelopers );
    app.get( `/api/developers`, developersCtrl.getdevelopers);
    app.get( `/api/developers/:id`, developersCtrl.getOneDeveloper );
    app.delete( `/api/developers/:id`, developersCtrl.deleteOneDeveloper )
   app.put(`/api/developers/:id`, developersCtrl.updateDeveloper)
}