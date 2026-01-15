import express from 'express';
const router = express.Router();
import {addContact} from '../controllers/contact.controller.js';

router.post('/contact', addContact);
router.get('/contact', (req, res) => {
  res.send('Contact API is working');
});

export default router;