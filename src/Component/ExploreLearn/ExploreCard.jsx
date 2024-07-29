
import style from './ExploreCard.module.scss';

import arrow from '../../assets/icons/exploreLearn/arrow_up_right.svg';
// import fire from '../../assets/icons/exploreLearn/fire.svg';
import bakery from '../../assets/icons/exploreLearn/bakery.svg';
// import vegan from '../../assets/icons/exploreLearn/vegan.svg';
// import seafood from '../../assets/icons/exploreLearn/seafood.svg';
// import grilling from '../../assets/icons/exploreLearn/grilling.svg';
// import wine from '../../assets/icons/exploreLearn/wine.svg';
// import cake from '../../assets/icons/exploreLearn/cake.svg';


// const learns = [
//     { title: 'Bakery', description: 'Master baking: from rustic bread to delicate pastries', icon: bakery },
//     { title: 'Vegan Cooking', description: 'Create delicious, nutritious meals with plant-based ingredients', icon: vegan },
//     { title: 'Seafood Mastery', description: 'Dive into seafood: from grilling fish to creating sushi', icon: seafood },
//     { title: 'BBQ & Grilling', description: 'Fire up your skills with mouth-watering BBQ dishes', icon: grilling },
//     { title: 'Wine Pairing', description: 'Enhance culinary experiences by mastering wine pairing', icon: wine },
//     { title: 'Cake Decorating', description: 'Unleash creativity with cake decorating techniques', icon: cake }
// ]

export default function ExploreCard() {
    return (

        <div className={style.card}>
            <img src={bakery} alt="Bakery" />
            <div>
                <h2>Bakery</h2>
                <img src={arrow} alt="Arrow up right" />
            </div>

            <p>Master baking: from rustic bread to delicate pastries</p>
        </div>
    );
}
