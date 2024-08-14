// services/authService.js
const knex = require('knex')(require('../knexfile').development);
require('dotenv').config();

const jwt = require('jsonwebtoken');
const emailService = require('./emailService');

exports.handleLogin = async (national_id) => {
  const user = await knex('users').where({ national_id }).first();
  if (!user) {
    throw new Error('User not found');
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  await knex('users').where({ id: user.id }).update({ otp });

  await emailService.sendOTPEmail(user.email, otp);
  return 'OTP sent to your email';
};

exports.handleVerify = async (national_id, otp) => {
  const user = await knex('users').where({ national_id, otp }).first();
  if (!user) {
    throw new Error('Invalid OTP');
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  await knex('users').where({ id: user.id }).update({ otp: null });

  return token;
};
