import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { useState, createContext } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import $ from 'jquery';

import { NavBar } from './components/NavBar';
import { AboutUs } from './components/About';
import { ShoppingItem } from './components/ShoppingItem';
export const OrderContext = createContext();

function App() {
  const [orderOn, setOrderOn] = useState(false);
  const [orders, setOrders] = useState([]);
  const [total, setTotal] = useState(0);
  const link="https://sheet.best/api/sheets/1c0207f2-924e-4888-9780-6d1db4847d90";

  function updateCart(src, name, quantity, price, unit) {
    //src, price & unit not needed if stored
    var existing = orders.find(ele => ele.name === name);
    if (existing) {
      if (quantity !== 0)
        existing.quantity = quantity;
      else {
        setOrders(orders.filter(ele => ele.name !== name));
        return;
      }
    }
    else {
      var newItem = { src: src, name: name, quantity:1, price: price, unit: unit };
      orders.push(newItem);
    }
    setOrders(orders);
  }

  function showBill() {
    var _total = 0;
    orders.forEach(val => {
      _total += val.price * val.quantity;
    });
    setTotal(_total);
    setOrderOn(true);
  }

  function postOrderData() {
    var name = document.getElementById("customer-name").value;
    var phone = document.getElementById("customer-phone").value;
    var address = document.getElementById("customer-address").value;

    var lst = "";
    orders.forEach(ele => lst += (ele.quantity + " " + ele.name + "."));

    var obj = {
      "Name": name,
      "Phone": phone,
      "Address": address,
      "Orders": lst
    }
    
    $.post(link, obj, function() { alert("Đã đặt hàng."); });
  }

  return (
    <div className="App">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
      <NavBar />
      <div>
        <div className='wrapper'>
          <img className='promotion' src="images/banh-trang-tron.jpg" alt=""/>
          <AboutUs />

          <div className='header'>Menu</div>
          <div className='section'>
            <div className='menu-container'>
              <div className='menu-item-container'>
                <a href="#main-course">
                  <div className='menu-item'>
                    <i className='fa fa-drumstick-bite'></i>
                    <div>Main Course</div>
                  </div>
                </a>
              </div>
              <div className='menu-item-container'>
                <a href="#junk-food">
                  <div className='menu-item'>
                    <i className='fa fa-cheese'></i>
                    <div>Junk Food</div>
                  </div>
                </a>
              </div>
              <div className='menu-item-container'>
                <a href="#soft-drink">
                  <div className='menu-item'>
                    <i className='fa fa-glass-water'></i>
                    <div>Soft Drink</div>
                  </div>
                </a>
              </div>
            </div>
          </div>


          <OrderContext.Provider value={updateCart}>
            <div className='shopping-group-container'>
              <div className='header-small'>Main Course</div>
              <div id="main-course" className='shopping-group'>
                <ShoppingItem src="images/banh-trang.jfif" name="Bánh tráng trộn" price={12} unit="bịch" />
                <ShoppingItem src="images/banh-mi-muoi-ot.jpg" name="Bánh mì muối ớt" price={12} unit="cái" />
                <ShoppingItem src="images/com-chay.jfif" name="Cơm cháy" price={12} unit="bịch" />
              </div>
            </div>
            <div className='shopping-group-container'>
              <div className='header-small'>Junk food</div>
              <div id="junk-food" className='shopping-group'>
                <ShoppingItem src="images/banh-po.jfif" name="Bánh Pò" price={12} unit="hộp" />
                <ShoppingItem src="images/ga-cay.jfif" name="Gà Cay" price={12} unit="túi" />
                <ShoppingItem src="images/goi-xoai.webp" name="Gỏi Xoài" price={12} unit="bịch" />
              </div>
            </div>
            <div className='shopping-group-container'>
              <div className='header-small'>Soft Drink</div>
              <div id="soft-drink" className='shopping-group'>
                <ShoppingItem src="images/tra-dao.jfif" name="Trà đào" price={10} unit="ly" />
                <ShoppingItem src="images/revive.jfif" name="Revive" price={10} unit="chai" />
                <ShoppingItem src="images/sting.jfif" name="Sting" price={10} unit="chai" />
              </div>
            </div>
          </OrderContext.Provider>

          <div className="order-btn" onClick={showBill}>
            <div>Show Bill</div>
          </div>

          <Modal isOpen={orderOn} className="order-modal">
            <ModalHeader>Giỏ hàng</ModalHeader>
            <ModalBody>
              <table>
                <thead>
                  <tr>
                    <th className="img-column"></th>
                    <th>Món</th>
                    <th>Giá</th>
                    <th>Đơn vị</th>
                    <th>Số lượng</th>
                    <th>Thành tiền</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map(ele =>
                    <tr className='order-record' key={ele.name}>
                      <th><img src={ele.src} alt="" className="record-img" /></th>
                      <th>{ele.name}</th>
                      <th>{ele.price} 000 đồng</th>
                      <th>{ele.unit}</th>
                      <th>{ele.quantity}</th>
                      <th>{ele.price * ele.quantity}</th>
                  </tr>)}
                </tbody>
              </table>
              <div>Tổng cộng: {total}</div>

              <div>
                <input id="customer-name" placeholder="Nhập tên..." />
              </div>
              <div>
                <input id="customer-phone" placeholder="Nhập số điện thoại..." />
              </div>
              <div>
                <input id="customer-address" placeholder="Nhập địa điểm nhận hàng..." />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={postOrderData}>Đặt hàng</Button>
              <Button color="secondary" onClick={() => setOrderOn(false)}>Hủy</Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default App;
