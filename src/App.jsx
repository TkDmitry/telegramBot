import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import GiftCard from './components/GiftCard';
import gift1 from './assets/gift1.png';
import CategoryList from './components/CategoryList';
import giftIcon from './assets/gift.png';
import flowersIcon from './assets/flowers.png';

const categories = [
    { id: 1, name: 'Подарки', icon: giftIcon },
    { id: 2, name: 'Цветы', icon: flowersIcon },
  ];

function App() {
  return (
    <div>
        
      <Header />
      <GiftCard
        image={gift1}
        title="Подарочная коробка"
        price={990}
        onClick={() => navigate('/gift/1')}
      />
      <CategoryList
        categories={categories}
        onSelect={(cat) => navigate(`/category/${cat.id}`)}
      />
    </div>
  );
}


// function App() {
//   useEffect(() => {
//     const tg = window.Telegram.WebApp;
//     const go = document.getElementById("go");
//     const buy = document.getElementById("buy");
//     const order = document.getElementById("order");

//     if (go) {
//       go.addEventListener("click", () => {
//         document.getElementById("start").style.display = "none";
//         document.getElementById("main").style.display = "block";
//       });
//     }

//     if (buy) {
//       buy.addEventListener("click", () => {
//         document.getElementById("main").style.display = "none";
//         document.getElementById("form").style.display = "block";
//       });
//     }

//     if (order) {
//       order.addEventListener("click", () => {
//         const name = document.getElementById("user_name").value;
//         const email = document.getElementById("user_email").value;
//         const phone = document.getElementById("user_phone").value;

//         tg.sendData(JSON.stringify({ name, email, phone }));
//         tg.close();
//       });
//     }
//   }, []);

//   return (
//     <div>
//       <div id="start">
//         <div id="istart">
//           <p>Hello, Trader!!!</p>
//         </div>
//         <div id="istart">
//           <button id="go">Go!</button>
//         </div>
//       </div>

//       <div id="main" style={{ display: 'none' }}>
//         <h1>Trading Teacher</h1>
//         <img src="https://cdn-icons-png.flaticon.com/512/3595/3595455.png" alt="Trading Icon" />
//         <div className="container-main">
//           <div className="container-menu">
//             <div className="imenu"><p>Text</p></div>
//             <div className="imenu"><p>Text</p></div>
//             <div className="imenu"><p>Text</p></div>
//           </div>
//           <div className="container">
//             <div className="item"><p>Text</p></div>
//             <div className="item"><p>Text</p></div>
//             <div className="item"><p>Text</p></div>
//           </div>
//         </div>
//         <button id="buy">Купить</button>
//       </div>

//       <form id="form" style={{ display: 'none' }}>
//         <input type="text" placeholder="Имя" id="user_name" />
//         <input type="text" placeholder="Email" id="user_email" />
//         <input type="text" placeholder="Телефон" id="user_phone" />
//         <button type="button" id="order">Оформить</button>
//       </form>
//     </div>
//   );
// }

export default App;
