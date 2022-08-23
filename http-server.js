const http = require('http');

const PORT = 3000;
const server = http.createServer((req,res)=>{
    if(req.url =="/data"){
        // res.writeHead(200,{
        //     'Content-Type': 'application/json'
        // });
        res.setHeader('Content-Type','application/json');
        res.statusCode = 200;
        res.end(JSON.stringify({
            'id':1,
            'name':"MSA",
            'role':'Programmer'
        }));
    }else if(req.url === "/friend"){
        res.setHeader =('Content-Type','text/html');
        res.write('<html>');
        res.write('<body>');
        res.write('<h1> "Routing in server" </h1>');
        res.write('</body>');
        res.write('</html');
        res.end();
    }else{
        res.statusCode = 404;
        res.end();
    }
   
});

server.listen(PORT, ()=>{
    console.log(`Listning to the ${PORT}`)
});