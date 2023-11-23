import { Link } from 'react-router-dom';
import Card from "./Card";
import "./scss/Configuration.scss"

const configureItem = [
    {
        display: 'Crop Category Configure',
        to: '/crop_category',
        section: 'crop_category'
    },
    {
        display: 'Crop Configure',
        to: '/crop',
        section: 'crop'
    },
    {
        display: 'Division Configure',
        to: '/division',
        section: 'division'
    },
    {
        display: 'District Configure',
        to: '/district',
        section: 'district'
    },
    {
        display: 'Fertilizer Configure',
        to: '/fertilizer',
        section: 'fertilizer'
    },
    {
        display: 'Post Configure',
        to: '/post',
        section: 'post'
    },
    {
        display: 'Zilla Crop Fertilizer Configure',
        to: '/zilla_crop_fertilizer',
        section: 'zilla_crop_fertilizer'
    }
]

const Configuration = () => {

    return (
        <>
            <div>
                {
                    configureItem.map((item, index) => (
                        <Link to={item.to} key={index} >
                            <div className="rounded-md w-2 card_view">
                                <Card display = {item.display}/>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </>
    );
};

export default Configuration;