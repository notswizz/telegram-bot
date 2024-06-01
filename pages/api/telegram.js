// pages/api/telegram.js
const bot = require('../../lib/telegramBot');

export default function handler(req, res) {
  console.log('Incoming request:', req.method, req.body);

  if (req.method === 'POST') {
    const { body } = req;
    try {
      bot.processUpdate(body);
      res.status(200).send('OK');
    } catch (error) {
      console.error('Error processing update:', error);
      res.status(500).send('Internal Server Error');
    }
  } else {
    console.log('Method not allowed:', req.method);
    res.status(405).send('Method Not Allowed');
  }
}
