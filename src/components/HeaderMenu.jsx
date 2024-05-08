import headerMenuList from './../lists/headerMenuList'
import './../css/headerMenu.css'
import { IoIosArrowBack } from "react-icons/io"
import search from "./../assets/icons/search.svg"
import cart from "./../assets/icons/cart.svg"
import person from "./../assets/icons/person.svg"
import { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io"
import { IoSunny } from "react-icons/io5"

const HeaderMenu = () => {
    const [dropdownActive, setDropdownActive] = useState('');
    const dropdownHandler = (name) => {
        if (name === dropdownActive)
            setDropdownActive('');
        else
            setDropdownActive(name);
    };
    const toggleTheme = () => {
        document.documentElement.toggleAttribute('dark');
    };

    return (
        <>
            <div id="menuContainer">
                <ul className='menuList'>
                    {headerMenuList.map((item, index) => (
                        <li key={index}>
                            <div
                                className='menuItemsTitle'
                                onClick={() => dropdownHandler(item.name)}>
                                {item.name}
                                {item.subMenu && (
                                    <IoIosArrowBack className={`dynamicArrow ${dropdownActive === item.name ? 'active' : ''}`} />
                                )}
                            </div>
                            {item.subMenu && (
                                <ul className={`subMenu ${dropdownActive === item.name ? 'active' : ''}`}>
                                    {item.subMenuList.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                    <li>
                        تغییر پس زمینه
                        <div className='itemsIcon'>
                            <IoSunny id='toggleTheme' onClick={toggleTheme} />
                        </div>
                    </li>
                    <li>
                        حساب کاربری
                        <div className='itemsIcon'>
                            <img src={person} alt="person" />
                        </div>
                    </li>
                    <li>
                        سبد خرید
                        <div className='itemsIcon'>
                            <img src={cart} alt="cart" />
                        </div>
                    </li>
                    <li className='searchInput'>
                        <input type="text" placeholder='دنبال چه چیزی می گردی؟' />
                        <button>
                            <img src={search} alt="search" />
                        </button>
                    </li>
                </ul>
            </div>
            <ul className='menuListDesktop'>
                {headerMenuList.map((item, index) => (
                    <li key={index}>
                        <div>
                            {item.name}
                            {item.subMenu && (
                                <IoIosArrowDown className='dynamicArrowDesktop' />
                            )}
                        </div>
                        {item.subMenu && (
                            <ul className={`subMenuDesktop ${dropdownActive === item.name ? 'active' : ''}`}>
                                {item.subMenuList.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
                <li className='searchInputDesktop'>
                    <img src={search} alt="search" />
                </li>
                <li className='cartDesktop'>
                    <img src={cart} alt="cart" />
                </li>
                <li className='accountDesktop'>
                    <button>
                        <img src={person} alt="person" />
                        حساب کاربری
                    </button>
                </li>
                <li>
                    <IoSunny id='toggleTheme' onClick={toggleTheme} />
                </li>
            </ul>
        </>
    )
}

export default HeaderMenu