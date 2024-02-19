import PriceOption from '../PriceOption/PriceOption';
import './PriceOptions.css'

const PriceOptions = () => {
        const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "features": [
            "Access to cardio area",
            "Access to weightlifting area",
            "Access to locker room",
            "Limited group fitness classes",
            "Access to showers",
            "Discounts on gym merchandise"
            ],
            "price": "29.99"
        },
        {
            "id": 2,
            "name": "Standard Membership",
            "features": [
            "Access to cardio area",
            "Access to weightlifting area",
            "Access to locker room",
            "Unlimited group fitness classes",
            "Access to sauna",
            "Access to showers",
            "Discounts on gym merchandise"
            ],
            "price": "39.99"
        },
        {
            "id": 3,
            "name": "Premium Membership",
            "features": [
            "Access to cardio area",
            "Access to weightlifting area",
            "Access to locker room",
            "Unlimited group fitness classes",
            "Access to sauna",
            "Access to swimming pool",
            "Access to showers",
            "Discounts on gym merchandise",
            "Personal trainer session/month"
            ],
            "price": "59.99"
        }
    ]
    return (
        <div className='m-12'>
            <h2 className='text-5xl'>Best Prices in the town</h2>
            <div className='grid md:grid-cols-3 gap-6'>
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option} />)
                }
            </div>
        </div>
    );
};

export default PriceOptions;