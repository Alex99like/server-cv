import express from 'express'
import TelegramBot from 'node-telegram-bot-api'
import bodyParser from 'body-parser'
import axios from 'axios'
import cors from 'cors'

const app = express()
const port = 4000

const token = '6245059473:AAGh7XuMfVVxlpjmlWkeQKl9C7II86GsjrQ'
const TELEGRAM_BOT_TOKEN = '6245059473:AAGh7XuMfVVxlpjmlWkeQKl9C7II86GsjrQ';
const TELEGRAM_CHAT_ID = '994524636';

app.use(bodyParser.json());
app.use(cors())

// Обработчик POST запросов на корневой URL
app.post('/', async (req, res) => {
  try {
    const message = req.body; // Объект из тела запроса
    const text =  `
        Имя: ${message.name}
    Телефон: ${message.phone}
    Мессенджер: ${message.contact}
    Компания: ${message.nameCompany}
    Описание: ${message.description}
    `;

    await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      chat_id: TELEGRAM_CHAT_ID,
      text,
      parse_mode: 'HTML'
    });

    res.status(200).send('OK');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error');
  }
});

// Запускаем сервер на порту 3000
app.listen(4000, () => {
  console.log('Server started on port 3000');
});


// const bot = new TelegramBot(token, { polling: true })
// bot.on('message', (msg) => {
//     console.log(msg)
// })

// app.get('/', (req, res) => {
  
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })