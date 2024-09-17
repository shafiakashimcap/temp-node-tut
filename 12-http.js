const http = require('http')

// req --> represnets incoming requerst, client is requesting fom the web browser 
// your webpage, you'll have info about the mthod etc in the request object
// res is what we're sending back 
// have to say which port the server is listening to 

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our homepage')
    }
    else if (req.url === '/about') {
        res.end('here is our short history')
    } 
    else {
        res.end(`
            <h1>Oops!</h1>
            <p> We can't seeem to find th epage you're looking for</p>
            <a href='/'>Back home</a>`)
    }
})

server.listen(5000)