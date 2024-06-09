import './PizzaCard.css'
import CardButton from './button/cardButton.jsx';
import PizzaList from './cardData.js';

function PizzaCard() {
    console.log(PizzaList);
    return (
        <div className="pizza-card">
            {PizzaList && PizzaList.map((data) => (
                <div key={data.id} className="pizzaCard1">
                    <div className='image-card'>
                        <img className="image" src={data.img} alt="img" />
                    </div>
                    <div className='details-card'>
                        <p className='items'>{`Name: ${data.name}`}</p>
                        <p className='items'>{`Size: ${data.size}`}</p>
                        <p className='items'>{`Price:₹ ${data.price} `}</p>
                        <p className='items'>{`${data.stock}`}</p>
                    </div>
                    <div className='pizza-cardButton'>
                        <CardButton/>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PizzaCard;