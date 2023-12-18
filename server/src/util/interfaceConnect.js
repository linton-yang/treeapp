var nforce = require('nforce');
var SFInfo = require('../../config/systemConfig');

var org = nforce.createConnection({
  clientId: SFInfo.clientId,
  clientSecret: SFInfo.clientSecret,
  redirectUri: SFInfo.redirectUri
});

module.exports = {
    query(sql){
        return new Promise((resolve,reject) =>{
            try{
                org.authenticate({ username: SFInfo.username, password: SFInfo.password}, function(err, oauth) {
                    if(err) {
                        reject(err);
                    } else {
                        org.query({ query: sql, oauth: oauth },function(err, resp) {
                            console.log('result',err,resp);
                            if(err) reject(err);
                            if(resp.records && resp.records.length) resolve(resp.records);
                        })
                    }
                });
            }catch(error){
                reject(error);
            }
        });
    },

    insert(sobject){
        return new Promise((resolve,reject) => {
            org.authenticate({ username: SFInfo.username, password: SFInfo.password}, function(err, oauth) {
                if(err) {
                    reject(err);
                } else {
                    org.insert({ sobject: sobject, oauth: oauth }, function(err, resp) {
                        if(err) {
                            reject(err);
                        } else {
                            resolve(resp);
                        }
                    });
                }
            });
        }); 
    },

    delete(sobject){
        return new Promise((resolve,reject) =>{
            org.authenticate({ username: SFInfo.username, password: SFInfo.password}, function(err, oauth) {
                if(err){
                    reject(err);
                } else {
                    org.delete({ sobject: sobject, oauth: oauth }, function(err, resp) {
                        if(err){
                            reject(err);
                        } else {
                            resolve('success');
                        }
                    });
                }
            });
        });
    },

    update(sobject){
        return new Promise((resolve,reject) =>{
            org.authenticate({ username: SFInfo.username, password: SFInfo.password }, function(err, oauth){
                if(err){
                    reject(err);
                } else {
                    org.update({ sobject: sobject, oauth: oauth}, function(err,resp){
                        if(err){
                            reject(err);
                        } else {
                            resolve('success');
                        }
                    });
                }
            });
        });
    }
}


