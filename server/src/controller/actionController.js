var nforce = require('nforce');
var SFConnect = require('../util/interfaceConnect');

module.exports = {
    query( req, res ){
        try{
            SFConnect.query(req.body)
            .then( result => {
                res.send(result);
            })
        }catch(error){
            res.send(error);
        }
    },

    insert( req, res ){
        var ld = nforce.createSObject(req.params.sobject, req.body);
        SFConnect.insert(ld).then( result =>{
            res.send(result);
        });
    },

    delete( req, res ){
        var ld = nforce.createSObject(req.params.sobject, { id : req.params.id });
        SFConnect.delete(ld).then( result => {
            res.send(result);
        });
    },

    update( req, res ){
        var ld = nforce.createSObject(req.params.sobject, req.body);
        SFConnect.update(ld).then( result => {
            res.send(result);
        });
    }
}