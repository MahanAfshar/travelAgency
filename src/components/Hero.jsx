import './../css/hero.css'
import sun from './../assets/icons/sun.svg'
import plane from './../assets/icons/plane.svg'
import heroImage from './../assets/images/heroImage.png'
import location from './../assets/icons/location.svg'
import jungle from './../assets/icons/jungle.svg'
import city from './../assets/icons/city.svg'
import beach from './../assets/icons/beach.svg'
import camp from './../assets/icons/camp.svg'

const list = [
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

const Hero = () => {
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
          list.map((item, index) => (
            <li key={index}>
              <div className='placesImage'>
                <img src={item.image} alt={item.name} />
              </div>
              <span className='placesName'>{item.name}</span>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Hero