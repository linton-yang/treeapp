var nforce = require('nforce');
var SFInfo = require('../../config/SFConfig');

var org = nforce.createConnection({
  clientId: SFInfo.clientId,
  clientSecret: SFInfo.clientSecret,
  redirectUri: SFInfo.redirectUri
});

module.exports = {
    query(sql){
        return new Promise((resolve,reject) =>{
            org.authenticate({ username: SFInfo.username, password: SFInfo.password}, function(err, oauth) {
                if(err) {
                    reject(err);
                } else {
                    org.query({ query: sql, oauth: oauth },function(err, resp) {
                        if(err) reject(err);
                        if(resp.records && resp.records.length) resolve(resp.records);
                    })
                }
            });
        });
    },

    insert(){

    },

    delete(){

    },

    upsert(){

    }
}


