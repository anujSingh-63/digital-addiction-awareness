const http = require('http');
const express = require('express');
const path = require('path');

const expressApp = express();

// Set view engine to EJS
expressApp.set('view engine', 'ejs');
expressApp.set('views', path.join(__dirname, 'views'));

// Serve static files
expressApp.use(express.static(path.join(__dirname, 'public')));

// Middleware for parsing
expressApp.use(express.urlencoded({ extended: false }));
expressApp.use(express.json());

// Route to render home page
expressApp.get('/', (req, res) => {
  res.render('store/homePage');
});

// Route to render track screen time page
expressApp.get('/track-screen-time', (req, res) => {
  res.render('store/trackScreenTime');
});

// Route to render weekly reports page
expressApp.get('/weekly-report', (req, res) => {
  res.render('store/weeklyReport');
});

// Route to render smart alerts page
expressApp.get('/smart-alerts', (req, res) => {
  res.render('store/smartAlerts');
});

// Route to render detox challenges page
expressApp.get('/detox-challenges', (req, res) => {
  res.render('store/detoxChallenges');
});

// Route to render login page
expressApp.get('/login', (req, res) => {
  res.render('auth/login');
});

// Route to render signup page
expressApp.get('/signup', (req, res) => {
  res.render('auth/signup');
});

// Handle 404 errors
expressApp.use((req, res) => {
  res.status(404).render('404', { message: 'Page Not Found' });
});

const server = http.createServer(expressApp);
const PORT = 5002;

server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});


 