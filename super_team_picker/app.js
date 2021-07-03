const express=require('express');
const logger = require('morgan');
const app = express();
const path = require('path')
const cookieParser = require('cookie-parser');
const cohortsRouter = require('./route/cohorts')
const methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(cookieParser());
app.use(logger ('dev'));
app.use(express.urlencoded({extended:true})); 
app.use(express.static(path.join(__dirname, 'public')))

app.use(methodOverride((req, res) => {
    if(req.body && req.body._method) {
        const method = req.body._method;
        delete req.body._method; 
        return method; 
    }

}));

app.get('/', (req, res) => {
    res.redirect('/cohorts');
  });
  
app.use('/cohorts', cohortsRouter);

const PORT = process.env.PORT || 5000
const ADDRESS = "localhost"
const environment = app.get('env'); 
app.listen(PORT, ADDRESS, () => {
    console.log(`Server is listening on http://${ADDRESS}:${PORT} in ${environment}`)
})
