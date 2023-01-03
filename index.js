const express = require('express');


const startServer = () => {
    const app = express();
    const port = process.env.PORT || 3000;
    
    // Static files
    app.use(express.static('public'));
    app.use(express.static('/css', express.static(__dirname + 'public/css')));
    app.use(express.static('/js', express.static(__dirname + 'public/js')));
    app.use(express.static('/img', express.static(__dirname + 'public/img')));

    // Set views
    app.set('views', './views');
    app.set('view engine', 'ejs');

    app.get('/', (req, res) => {
        //res.sendFile(__dirname + '/views/index.html');
        res.render('index', {url: 'https://www.youtube.com/embed/keKkoYr2yA8'});
    });


    app.listen(port, () => console.log(`App running at http://localhost:${port}`));
}

startServer();