var response = require('./res');
var rp = require('request-promise');


exports.datajob = function (req, res) {
    rp.get('https://jobs.github.com/positions.json').then(v=>response.ok(v,res));
    //     if(error){
    //         console.log(error)
    //     } else{
    //         response.ok(rows, res)
    //     }
    // }
  }
  exports.datajobid = function (req, res) {
      var id = req.params.id;
    rp.get('https://jobs.github.com/positions.json/?.json', [id]).then(v=>response.ok(v,res));
    //     if(error){
    //         console.log(error)
    //     } else{
    //         response.ok(rows, res)
    //     }
    // }
  }
//   exports.login = function (req, res) {
    
//     if(req.body.username == "DANS" && req.body.password == "123"){
//         response.send('Selamat Datang');
//     }
//     else {
//                 response.send('Incorrect Username and/or Password!');
//             }			
//             // response.end();
//             console.log(req.body.username);
//             // console.log(p);
//     }