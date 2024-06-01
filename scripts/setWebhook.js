// scripts/setWebhook.js
const fetch = require('node-fetch');
const { TELEGRAM_BOT_TOKEN } = process.env;
const webhookUrl = 'http://localhost:3000/api/telegram';

const setWebhook = async () => {
  const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/setWebhook?url=${webhookUrl}`);
  const data = await response.json();
  console.log(data);
};

setWebhook();
0