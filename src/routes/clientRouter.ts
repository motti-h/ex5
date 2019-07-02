import express from 'express';
//import store from '../store';

const clientRouter = express.Router();

clientRouter.get('/', (req, res) => res.render('login', {pageTitle: 'Login Page'}));
clientRouter.get('/', (req, res) => res.render('home', {pageTitle: 'Welcome to Ticker App!'}));
/*
router.get('/projects', (req, res) => {
  const projects = store.projects;
  res.render('projects', {
    pageTitle: 'Projects Page',
    projects,
  });
});
*/
export {clientRouter};
