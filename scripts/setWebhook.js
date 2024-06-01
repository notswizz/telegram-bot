// scripts/setWebhook.js
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const { TELEGRAM_BOT_TOKEN } = process.env;
const webhookUrl = 'https://your-domain.com/api/telegram'; // Replace with your actual deployed URL

const setWebhook = async () => {
  const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/setWebhook?url=${webhookUrl}`);
  const data = await response.json();
  console.log(data);
};

setWebhook().catch(console.error);
