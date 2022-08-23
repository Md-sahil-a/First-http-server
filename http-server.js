const http = require('http');

const PORT = 3000;
const data = [
    {
        'id':0,
        'name':'sahil',
        'role':'Programmer',
    },
    {
        'id':1,
        'name':'Akhil',
        'role':'Programmer',
    },
    {
        'id':2,
        'name':'Aarif',
        'role':'Programmer',
    },
    {
        'id':3,
        'name':'Asif',
        'role':'Data Analyst',
    },
    {
        'id':4,
        'name':'Akmal',
        'role':'Programmer',
    },
    {
        'id':5,
        'name':'Tanu',
        'role':'Network engineer',
    }
]
const server = http.createServer((req,res)=>{
    const item = req.url.split('/');
    if(item[1] =="data"){
        // res.writeHead(200,{
        //     'Content-Type': 'application/json'
        // });
        res.setHeader('Content-Type','application/json');
        res.statusCode = 200;
        const paraindex = +item[2];
        if(item[2] == paraindex){
            res.end(JSON.stringify(data[paraindex]));
        }else{
            res.end(JSON.stringify(data));
        }
    }else if(item[1] === "friend"){
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