import React from 'react';
import logo from '../../images/logo.svg';
import './Header.css';


const Header = () => {
    return (
        <div>
            <div className="header">
                <div className="header__main-wrapper">
                    <div className="header__nav-wrapper">
                        <div className="header__logo-wrapper">
                            <a href="/"><img src={logo} alt="NOZE" className="header__logo" /></a>
                        </div>
                        {/* <!--add class 'active' for open menu--> */}
                        <ul className="header__nav-list">

                            <li className="header__nav-list-item  active" id="Overview"><a href="/">Overview</a></li>

                            <li className="header__nav-list-item  " id="Specs"><a href="/specs/">Specs</a></li>

                            <li className="header__nav-list-item  " id="FAQs"><a href="/#anchor__faqs">FAQs</a></li>

                        </ul>
                    </div>

                    <div className="header__inner-wrapper">
                        <div className="header__calltoaction-wrapper">
                            <div className="header__calltoaction-moto-wrapper">
                                <p className="header__calltoaction-moto">
                                    <span>Order for $249</span>
                                </p>
                            </div>
                            {/* <div id="product-component-1625250358032" className="shopify-buy-frame shopify-buy-frame--product shopify-buy__layout-vertical"></div> */}
                            <div className="has-image shopify-buy__layout-vertical shopify-buy__product">
                                <div className="shopify-buy__btn-wrapper" data-element="product.buttonWrapper"><button className="shopify-buy__btn  " data-element="product.button">Pre Order</button></div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;