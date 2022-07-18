const app = require('./server')
require('dotenv').config()

app.listen(3000, () => console.log('Express departed from port 3000'))
