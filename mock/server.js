// server.js
const jsonServer = require('json-server');
const path = require('path');
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname,'./test.json'));
const middlewares = jsonServer.defaults({ watch : true });
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync(path.join(__dirname,'./test.json'))
const db = low(adapter,{ storage: 'fileAsync' })

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.get('/users',(req,res,next)=>{
    const users = db.get('users')
        .value()
    res.send(users)
})

server.get('/users/:nickname',(req,res,next)=>{
    const nickname = req.params.nickname;
    console.log(nickname);
    const users = db.get('users').filter({author:nickname})
        .value()
    res.send(users)
})

server.post('/users',(req,res,next)=>{
    const data = req.body;
    console.log(JSON.stringify(data))
    db.get('users').push(data)
        .last()
        .assign({ id: Date.now().toString() })
        .write()
    const users = db.get('users').filter({userInfo:{nickname:data.userInfo.nickname}}).value()
    res.send(users)
})

server.use(router)
server.listen(9090, () => {
    console.log('JSON Server is running')
})