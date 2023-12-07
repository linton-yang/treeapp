var nforce = require('nforce');
var SFConnect = require('../util/SFConnect');

module.exports = {
    query( req, res ){
        var sql = 'SELECT Id, FirstName, LastName, Email FROM Lead  ';
        var sql2 = 'SELECT Id,Name FROM ACCOUNT LIMIT 10';
        SFConnect.query(sql)
        .then( result => {
            res.send(result);
        })
    },
    insertLead( req, res ){
        var ld = nforce.createSObject('Lead', {
            FirstName: 'Bobby',
            LastName: 'Tester',
            Company: 'ABC Widgets',
            Email: 'bobbytester@testertest.com'
        });
        SFConnect.insert(ld).then( result =>{
            res.send(result);
        });
    },

    deleteLead( req, res ){
        var ld = nforce.createSObject('Lead', {
            id : '00QIU00001InNhM2AV'
        });
        SFConnect.delete(ld).then( result => {
            res.send(result);
        });
    },

    updateLead( req, res ){
        var ld = nforce.createSObject('Lead', {
            id : '00Q28000002OTpOEAW',
            lastname : '张三'
        });
        SFConnect.update(ld).then( result => {
            res.send(result);
        });
    }
}