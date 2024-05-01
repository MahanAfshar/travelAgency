import bomb from './../assets/icons/bomb.svg'
import filter from './../assets/icons/filter.svg'
import './../css/bestSellingTours.css'
import CardProduct from './CardProduct'
import BestSellingToursData from './../data/bestSellingTourData'
import { IoIosArrowDown } from "react-icons/io"

const tourList = ['همه تورها', 'تور ایران', 'تور اروپا', 'تور آسیا'];

const BestSellingTours = () => {
    return (
        <div className='bestSellingContainer'>
            <div className='bestSellingHeader'>
                <div>
                    <h3><span className='primaryLine'>پرفروش</span> ترین تورها</h3>
                    <img src={bomb} alt="bomb" />
                </div>
                <button>دیدن همه</button>
            </div>
            <div className='filterSection'>
                <ul>
                    {tourList.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <img src={filter} alt="filter" />
            </div>
            <CardProduct data={BestSellingToursData} />
            <button className='loadButton'>
                <IoIosArrowDown />
            </button>
        </div>
    )
}

export default BestSellingTours