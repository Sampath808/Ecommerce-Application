const express = require('express');
     const app = express();

     app.use((req, res, next) => {
       res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
       res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
       next();
     });

     app.listen(8080, () => {
       console.log('Server listening on port 8080');
     });