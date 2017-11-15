const jsonServer = require('json-server');
const path = require('path');
const server  = jsonServer.create();
const router  = jsonServer.router(path.join(__dirname, 'test.json'));
const middleWares = jsonServer.defaults();

server.use(middleWares);
server.use(router);

server.listen(5100,()=>{
    console.log('JSON Server is running')
});

server.get('/echo', (req, res) => {
    console.log(req.query);
    res.jsonp(req.query)
});