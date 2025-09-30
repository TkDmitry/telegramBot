import asyncio
from aiogram import Bot, Dispatcher, Router
from aiogram.client.default import DefaultBotProperties
from aiogram.enums import ParseMode
from aiogram.types import Message, InlineKeyboardMarkup, InlineKeyboardButton, WebAppInfo
from aiogram.filters import Command
from aiogram.fsm.storage.memory import MemoryStorage

TOKEN = "8348782064:AAHJVoZLD3lH63rzSJjoqcPNWlhcZqjUnLQ"

# Инициализация бота с parse_mode
bot = Bot(token=TOKEN, default=DefaultBotProperties(parse_mode=ParseMode.HTML))
dp = Dispatcher(storage=MemoryStorage())
router = Router()

# ✅ Используем фильтр Command вместо commands=["start"]
@router.message(Command("start"))
async def start_handler(message: Message):
    markup = InlineKeyboardMarkup(
        inline_keyboard=[
            [InlineKeyboardButton(text="🎁 Открыть GoGift", web_app=WebAppInfo(url="https://tkdmitry.github.io/telegramBot/"))]
        ]
    )
    await message.answer("🛍️ Добро пожаловать в GoGift! Нажмите кнопку ниже чтобы открыть магазин:", reply_markup=markup)

dp.include_router(router)

async def main():
    await dp.start_polling(bot)

if __name__ == "__main__":
    asyncio.run(main())
