module.exports = (app)=>{
    let route = app.route();
    
    route.get('/key', (res, req)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.send('<h1>Ola</h1>');
    })

}