var nforce = require('nforce');
var SFConnect = require('../util/SFConnect');

module.exports = {
    query(req,res){
        var query = 'SELECT Id, FirstName, LastName, Email FROM Lead LIMIT 10';
        SFConnect.query(query).then( result => {
            res.send(result); 
        });  
    }
}