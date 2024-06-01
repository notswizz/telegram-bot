// scripts/setWebhook.js
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const { TELEGRAM_BOT_TOKEN } = process.env;

if (!TELEGRAM_BOT_TOKEN) {
  console.error('TELEGRAM_BOT_TOKEN is not defined in .env.local');
  process.exit(1);
}

console.log('TELEGRAM_BOT_TOKEN:', TELEGRAM_BOT_TOKEN);

const webhookUrl = 'https://notswizzbot.vercel.app/api/telegram'; // Use your actual deployed URL

const setWebhook = async () => {
  const fetch = await import('node-fetch').then(module => module.default);
  try {
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/setWebhook?url=${webhookUrl}`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Failed to set webhook:', error);
  }
};

setWebhook().catch(console.error);
