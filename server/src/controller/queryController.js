var nforce = require('nforce');
var SFConnect = require('../util/SFConnect');

module.exports = {
    query( req, res ){
        var sql = 'SELECT Id, FirstName, LastName, Email FROM Lead LIMIT 10';
        var sql2 = 'SELECT Id,Name FROM ACCOUNT LIMIT 10';
        SFConnect.query(sql)
        .then( result => {
            var resultObj = {Leads:result};
            SFConnect.query(sql2).then( result => {
                resultObj.Accounts = result;
                res.send(resultObj);
           });
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
        SFConnect.delete('00Q0I00000vPvDZUA0')
        .then( result => {
            res.send(result);
        });
    }
}