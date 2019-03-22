const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.use(express.static(__dirname+'/public'));
app.use('/css', express.static(__dirname + '/public'));
app.use('/js', express.static(__dirname + '/public'));

//router.get('/about',function(req,res){
//  res.sendFile(path.join(__dirname+'/about.html'));
//});
//
//router.get('/sitemap',function(req,res){
//  res.sendFile(path.join(__dirname+'/sitemap.html'));
//});

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');
