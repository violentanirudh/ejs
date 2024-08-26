const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

// Setting EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

// Configuring Static Files
app.use('/public/', express.static(path.join(__dirname, 'public')));

// Routes
app.get('/:location?', (req, res) => {
    const location = req.params.location ?? 'home';
    const file = path.join(__dirname, 'views', `${location}.ejs`);
    
    if (fs.existsSync(file)) {
        return res.render(location);
    }
    
    return res.status(404).render('404');
});

app.listen(3000, () => {
    console.log('Preview : http://127.0.0.1:3000');
});
