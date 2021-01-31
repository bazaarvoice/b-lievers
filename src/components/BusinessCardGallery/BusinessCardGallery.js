import React from 'react';
import BusinessCard from '../BusinessCard/BusinessCard';
import RefillQuarterImage from '../../assets/refill-quarter.jpg';
import ThreeEightSevenOrmeauRoadImage from '../../assets/387-ormeau-road.jpeg';
import FiveACafeImage from '../../assets/5a-cafe.jpg';
import MaggieMaysImage from '../../assets/maggie-mays.jpg';
import SloansGymImage from '../../assets/sloans-gym.jpg';
import WardAndCoFineFoods from '../../assets/ward-and-co.png';
import './BusinessCardGallery.css';

class BusinessCardGallery extends React.Component {
    render() {
        return (
            <div className="gallery">
                <BusinessCard name={"Refill Quarter"} id={"refill-quarter"} url={"https://www.refillquarter.com/"} description={"Zero Waste Shop"} recomender="Laura McCormick" image={RefillQuarterImage} />
                <BusinessCard name={"387 Ormeau Road"} id={"387-ormeau-road"} url={"https://www.facebook.com/387ormeauroad/"} description={"Café"} recomender="Laura McCormick" image={ThreeEightSevenOrmeauRoadImage} />
                <BusinessCard name={"5a Café"} id={"5a-cafe"} url={"http://www.generalmerchants.co.uk/stranmillis/"} description={"Café"} recomender="Dawn Bell" image={FiveACafeImage} />
                <BusinessCard name={"Maggie Mays"} id={"maggie-mays"} url={"https://maggiemaysbelfastcafe.co.uk/city-centre-cafe/"} description={"Café"} recomender="Iona McAtackney" image={MaggieMaysImage} />
                <BusinessCard name={"Sloans Gym"} id={"sloans-gym"} url={"https://www.sloansgymbelfast.com/"} description={"Gym"} recomender="Jack O'Hara" image={SloansGymImage} />
                <BusinessCard name={"Ward & Co Fine Foods"} id={"ward-and-co-fine-foods"} url={"https://wardand.co/"} description={"Artisan Deli"} recomender="Dawn Bell" image={WardAndCoFineFoods} />
            </div>
        );
    }
}

export default BusinessCardGallery