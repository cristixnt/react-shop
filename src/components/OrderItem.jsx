import React, { useContext } from 'react';
import '@styles/OrderItem.scss';
import close from '@icons/icon_close.png';
import AppContext from '@context/AppContext';

const OrderItem = ({ index, product }) => {

	const { removeFromCart } = useContext(AppContext);

	const handleDelete = (index) => {
		removeFromCart(index);
	}

	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt="bike" />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img src={close} onClick={() => handleDelete(index)} alt="close" />
		</div>
	);
}

export default OrderItem;
