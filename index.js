const express = require('express')
const helmet = require('helmet')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'static')))
app.set('views', path.join(__dirname, 'views')); 
app.use(helmet({
    contentSecurityPolicy: {
      directives: {
        "script-src": [
            "'self'",
            "unpkg.com",
            "cdnjs.cloudflare.com",
            "'nonce-typewriter'"
        ]
      },
    },
  }
));

app.get('/', (req, res, next) => {
    return res.sendFile('views/index.html', {root: __dirname })
})

app.listen(5000, () => console.log('app running on port 5000'))