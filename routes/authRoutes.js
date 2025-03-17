const express = require('express');
const { signupUser, signinUser } = require('../controllers/authController');

const router = express.Router();

// Sign Up
router.post('/signup', signupUser);

// Sign In
router.post('/signin', signinUser);

module.exports = router;
