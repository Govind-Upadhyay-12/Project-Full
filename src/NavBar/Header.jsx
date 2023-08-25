import React from 'react';
import img1 from '../images/black-settings-button.png';
import img2 from '../images/heart.png';
import img3 from '../images/user (1).png';
import logo from '../images/Screenshot 2023-08-25 194806.png';
import './Header.scss';
import { Link } from 'react-router-dom';
import Head from '../Head/Head';
import HeadMain from '../Head/HeadMain';

const Header = () => {
  return (
    <>
    <div className='header'>
      <div className='logo'>
        <img src={logo} width={80} alt="Logo" />
      </div>
      <div className='content'>
        <div className='home'>
          <Link to="/" className="ho">
            <h2>Home</h2>
          </Link>
        </div>
        <div className='cate'>
          <Link to="/categories" className='categories'>
            <h2>Categories</h2>
          </Link>
        </div>
        <div className="shop">
          <Link to="/shopsnearme" className='sh'>
            <h2>Shops Near Me</h2>
          </Link>
        </div>
        <div className="order">
          <Link to="/myorder" className='ord'>
            <h2>My Order</h2>
          </Link>
        </div>
        <div className="signin">
          <Link to="/Signin" className='sign'>
            <h2>Sign in</h2>
          </Link>
        </div>
        <div className="searchhere">
          <input type='search' placeholder='Search here' />
        </div>
      </div>
      <div className='last'>
        <div className='setting'>
          <Link to="/setting" className="set">
            <img src={img1} width={30} alt="Settings" />
          </Link>
        </div>
        <div className='wishlist'>
          <Link to="/wishlist" className="wish">
            <img src={img2} width={30} alt="Wishlist" />
          </Link>
        </div>
        <div className='account'>
          <Link to="/account">
            <img src={img3} width={28} alt="Account" />
          </Link>
        </div>
      </div>
    </div>
    <div>
      <HeadMain></HeadMain>
    </div>
    </>
  );
}

export default Header;
