
   //  var http = require ('http');
   //  var url =require ('url');
   //  var server = http.createServer( function (req, res) {
   //      var page= url.parse(req.url).pathname;
   //      console.log(page);
   //   res.writeHead (200,{"content-Type":"text/html"}) ;



   //   if (page == '/') {
   //      res.write ('Vous êtes dans la page d\'accueil');
   //   }
   //   else if (page == '/Contact') {
   //      res.write ('Vous êtes dans la page Contact !');
   //   }
   //   else if (page == '/Affichage/1/user') {
   //      res.write ('Affichez 1\'utilisateur qui a 1\*id 1 !');
   //   }
   //   else  {
   //      //return{ status: 404, message:"not found"}
   //      res.write ('404 not found !');
   //   }
    
    //  res.write ('<p>Voiciiiiiiii un paragraphe <strong>HTML</strong> !</p>');
    //  res.write('<!DOCTYPE html>'+
    //  '<html>'+
    //  '<head>'+
    //  '<title>Ma page Node.js !</title>'+
    //  '</head>'+
    //  '<body>'+
    //  '<p>Voici un pagraphe <strong>HTML</strong> !</p>'+
    //  '</body>'+
    //  '</html>');
   // res.write("bien on avance")
    // res.end();
//});
  
   //server.listen (8080);


//    const express=require('express');
// const app= express();


// const logDateTime=(req, res,next)=>{
//    req.dateTime=new Date();
//    console.log(new Date ());
//    next();

// }
// app.use(logDateTime)
// const requireJsonContent = () =>{
//    return (req,res,next)=> {
//       if (req.headers['content-type']!=='application/json'){
//       res.status(400).send('server requires application/json')
//        } else {
//          next();
//        }
//    }
// }
// app.get('/',requireJsonContent(), (req,res,next)=> {
//    res.send(`hello 4 twin 5  at ${req.dateTime}`) ;
// });
// app.listen(8080);
