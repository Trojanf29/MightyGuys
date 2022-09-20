import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Navbar, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
      <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white box-shadow mb-3" light>
        <ul className="navbar-nav flex-grow">
          <NavItem>
            <NavLink tag={Link} className="text-dark" to="/">About Us</NavLink>
          </NavItem>
        </ul>
        <ul className="navbar-nav flex-grow">
          <NavItem>
            <NavLink tag={Link} className="text-dark" to="/">Menu</NavLink>
          </NavItem>
        </ul>
        <ul className="navbar-nav flex-grow">
          <NavItem>
            <NavLink tag={Link} className="text-dark" to="/">Contact</NavLink>
          </NavItem>
        </ul>
      </Navbar>
      <div>
        <div className='wrapper'>
          <img className='promotion' src="images/banh-trang-tron.jpg" alt=""/>
          <div className='section'>
            <div className='child w30'>
              <div className='black-header'>Welcome</div>
              <div className='logo-container'>
                <img className='logo1' src="images/mighty-guys-logo.png" alt=""/>
              </div>
            </div>
            <div className='child w70'>
              <div className='black-header'>Our goals</div>
              <div>Mighty Guys is a group of students at FPT University with the same goal:
                To help others achieve their best state of health.
                This food store is a part of the project. After the process of fundraising,
                100% profit will be invested in "The Green Journey", another project of us to help protect the environment.
                We commit the quality and quantity of our product. The food is healthy and professionally preserved and processed.
                The price is reasonable and affordable to students</div>
            </div>
          </div>
          <div className='header'>Menu</div>
          <div className='section'>
            <div className='menu-container'>
              <a href="#main-course">
                <div className='menu-item'>
                  <i className='fa fa-drumstick-bite'></i>
                  <div>Main Course</div>
                </div>
              </a>
              <a href="#junk-food">
                <div className='menu-item'>
                  <i className='fa fa-cheese'></i>
                  <div>Junk Food</div>
                </div>
              </a>
              <a href="#soft-drink">
                <div className='menu-item'>
                  <i className='fa fa-glass-water'></i>
                  <div>Soft Drink</div>
                </div>
              </a>
            </div>
          </div>
          <div className='heade-small'>Main Course</div>
          <div id="main-course">
            <img src="images/banhtrang.jpg" alt="" width="200" height="200" />
          </div>
          <div className='header-small'>Junk food</div>
          <div id="junk-food">
          </div>
          <div className='header-small'>Soft Drink</div>
          <div id="soft-drink">
            <img src="images/tradao.jpg" alt="" width="200" height="200" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
