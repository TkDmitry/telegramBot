from aiogram import Bot, Dispatcher, executor, types
from aiogram.types.web_app_info import WebAppInfo

bot = Bot('7087256266:AAFkJW78YiTV1WRm0SmlQh1zZzO9-qI5s34')
dp = Dispatcher(bot)

@dp.message_handler(commands=['start'])
async def start(message: types.Message):
    markup = types.InLineKeyboardMarkup()
    markup.add(types.InLineKeyboardButton('Site', web_app=WebAppInfo(url='https://tkdmitry.github.io/telegramBot/')))
    await message.answer('Hello', reply_markup=markup)

# @dp.message_handler(commands=['start'])
# async def start(message: types.Message):
#     await message.answer('Hello!')
#
# @dp.message_handler(commands=['inline'])
# async def info(message: types.Message):
#     markup = types.InlineKeyboardMarkup()
#     markup.add(types.InlineKeyboardButton('Hello', callback_data='hello'))
#     await message.reply('Hello', reply_markup=markup)
#
# @dp.callback_query_handler()
# async def callback (call):
#     await call.message.answer(call.data)
#
# @dp.message_handler(commands=['reply'])
# async def reply(message: types. Message):
#     markup = types.ReplyKeyboardMarkup (one_time_keyboard=True)
#     markup.add(types.KeyboardButton('Site'))
#     markup.add(types.KeyboardButton ('Website'))
#     await message.answer('Hello', reply_markup=markup)

executor.start_polling(dp)
