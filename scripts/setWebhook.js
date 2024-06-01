// scripts/setWebhook.js
const dotenv = require('dotenv');

dotenv.config();

const { TELEGRAM_BOT_TOKEN } = process.env;
const webhookUrl = 'https://notswizzbot.vercel.app/pages/api/telegram'; // Replace with your actual deployed URL

const setWebhook = async () => {
  const fetch = await import('node-fetch').then(module => module.default);
  const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/setWebhook?url=${webhookUrl}`);
  const data = await response.json();
  console.log(data);
};

setWebhook().catch(console.error);
