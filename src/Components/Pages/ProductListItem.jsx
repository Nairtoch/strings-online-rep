import Style from './ProductListItem.module.scss';
import { Link } from 'react-router-dom';

export const ProductListItem = props => {
    return (
        <div className={Style.product_list_item_wrapper}>
            <span>
                <figure>
                    <img src={props.data.image_fullpath} alt="Image of a Product" />
                </figure>
            </span>
            <span>
                <h3>{props.data.name}</h3>
                <p>Item Number: {props.data.item_number}</p>
                <p>{props.data.description_short}</p>
                <p><Link to={`/products/${props.group_id}/${props.data.id}`}></Link></p>
            </span>
            <span>
                <p>Price: {props.data.price} DKK</p>
                <button>Add to Cart</button>
            </span>
        </div>
    )
}