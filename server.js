const express = require ('express')
const sequelize = require('./config/connection')

const api_routes = require('./routes/api-routes')
const html_routes = require('./routes/html-routes');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended:  true }));
app.use(express.json())
app.use(express.static("public"))

app.use('/api', api_routes)
app.use('/', html_routes)

sequelize.sync({force: false}).then(()=>{
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`)
    });
})
