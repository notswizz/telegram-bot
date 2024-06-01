// pages/api/telegram.js
import bot from '../../lib/telegramBot';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { body } = req;
    bot.processUpdate(body);
    res.status(200).send('OK');
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
