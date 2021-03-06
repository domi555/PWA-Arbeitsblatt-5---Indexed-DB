const express = require('express');
const asyncHandler = require('express-async-handler');
const webpush = require('web-push');
require('dotenv').config();

const { getEmployees, deleteEmployees } = require('../model/employees');

const router = express.Router();

router.get(
  '/employees',
  asyncHandler(async (req, res) => {
    res.json(getEmployees());
  }),
);

router.delete(
  '/employees/:id',
  asyncHandler(async (req, res) => {
    res.json(deleteEmployees(req.params.id));
  }),
);

// Subscribe
const publicVapidKey = process.env.PUBLIC_VAPID_KEY;
const privateVapidKey = process.env.PRIVATE_VAPID_KEY;
webpush.setVapidDetails(
  'mailto:palatin.d02@htlwienwest.at',
  publicVapidKey,
  privateVapidKey,
);
const subscriptions = [];
router.post(
  '/subscribe',
  asyncHandler(async (req, res) => {
    subscriptions.push(req.body);
    res.status(201).end();
  }),
);
// Notify
router.post('/notify', (req, res) => {
  const payload = JSON.stringify({ title: 'Push Test', body: req.body });
  for (const sub of subscriptions) {
    try {
      webpush.sendNotification(sub, payload);
    } catch (error) {
      console.error(error);
    }
  }
  res.status(200).send('OK');
});

module.exports = router;
