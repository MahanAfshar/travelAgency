import './../css/hero.css'
import sun from './../assets/icons/sun.svg'
import plane from './../assets/icons/plane.svg'
import heroImage from './../assets/images/heroImage.png'
import location from './../assets/icons/location.svg'
import jungle from './../assets/icons/jungle.svg'
import city from './../assets/icons/city.svg'
import beach from './../assets/icons/beach.svg'
import camp from './../assets/icons/camp.svg'
import calendar from './../assets/icons/calendar.svg'
import { useState } from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import person from './../assets/icons/person.svg'

const placesList = [
  {
    name: 'کمپ',
    image: camp
  },
  {
    name: 'ساحل',
    image: beach
  },
  {
    name: 'شهر',
    image: city
  },
  {
    name: 'جنگل',
    image: jungle
  }
];
const citiesList = ['تهران', 'مشهد', 'شیراز', 'اصفهان', 'تبریز'];
const numbersList = [1, 2, 3, 4, 5];

const Hero = () => {
  const date = new Date();
  let today = date.getUTCDate();
  let month = date.getUTCMonth() + 1;
  let year = date.getUTCFullYear();
  if (today < 10)
    today = '0' + today;
  if (month < 10)
    month = '0' + month;
  const fullDate = `${year}-${month}-${today}`;
  const [startDate, setStartDate] = useState('تاریخ ورود');
  const [endDate, setEndDate] = useState('تاریخ خروج');

  return (
    <div className='hero'>
      <p className="poem">
        <img className='sunLogo' src={sun} alt="sun" />
        بسیار سفر باید تا پخته شود خامی
      </p>
      <h2 className='heroTitle'>
        دنیا را کشف کنید زندگی را <span className='primary'>تجربه</span> کنید
        <img src={plane} alt="plane" />
      </h2>
      <div className='heroImageContainer'>
        <img className='heroImage' src={heroImage} alt="newyork city" />
        <div className='imageInfo'>
          <h3>
            <img className='locationIcon' src={location} alt="location" />
            آمریکا
          </h3>
          <p>نیویورک</p>
        </div>
      </div>
      <ul className='places'>
        {
          placesList.map((place, index) => (
            <li key={index}>
              <div className='placesImage'>
                <img src={place.image} alt={place.name} />
              </div>
              <span className='placesName'>{place.name}</span>
            </li>
          ))
        }
      </ul>
      <ul className='searchSection'>
        <li>
          <div className='destination'>
            <img className='searchIcons' src={location} alt="location" />
            <select>
              <option>مقصد خود را انتخاب کنید</option>
              {citiesList.map((city, index) => (
                <option key={index} value={city}>{city}</option>
              ))}
            </select>
          </div>
        </li>
        <li>
          <div className='dateStart' select-date={startDate}>
            <img className='searchIcons' src={calendar} alt="calendar" />
            <input className='dateInput' type="date" onChange={(e) => setStartDate(e.target.value)} min={fullDate} />
            <MdOutlineKeyboardArrowDown className='arrowIcons' />
          </div>
        </li>
        <li>
          <div className='dateEnd' select-date={endDate}>
            <img className='searchIcons' src={calendar} alt="calendar" />
            <input className='dateInput' type="date" onChange={(e) => setEndDate(e.target.value)} min={fullDate} />
            <MdOutlineKeyboardArrowDown className='arrowIcons' />
          </div>
        </li>
        <li className='personSection'>
          <img className='searchIcons' src={person} alt="person" />
          <select>
            <option>تعداد</option>
            {numbersList.map((number, index) => (
              <option key={index} value={number}>{number} نفر</option>
            ))}
          </select>
        </li>
        <li>
          <button className='searchButton'>جستجو</button>
        </li>
      </ul>
    </div>
  )
}

export default Hero