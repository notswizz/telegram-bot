// lib/telegramBot.js
const TelegramBot = require('node-telegram-bot-api');
const dotenv = require('dotenv');

dotenv.config();

const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: false });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  console.log('Received /start command from chatId:', chatId);
  bot.sendMessage(chatId, 'Welcome to your Telegram bot!');
});

bot.onText(/\/help/, (msg) => {
  const chatId = msg.chat.id;
  console.log('Received /help command from chatId:', chatId);
  bot.sendMessage(chatId, 'How can I assist you?');
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  console.log('Received message:', msg.text, 'from chatId:', chatId);
  if (msg.text && !msg.text.startsWith('/')) {
    bot.sendMessage(chatId, `You said: ${msg.text}`);
  }
});

bot.on('polling_error', (error) => console.log('Polling error:', error));

bot.on('webhook_error', (error) => console.log('Webhook error:', error));

module.exports = bot;
