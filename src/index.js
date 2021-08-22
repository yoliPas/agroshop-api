const app = require('./app')
require('./database');

app.listen(app.get('port'));
console.log("connected the port", app.get('port'));

