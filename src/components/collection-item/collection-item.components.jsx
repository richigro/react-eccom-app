import React from 'react';

import './collection-item.styles.scss';

const CollectionItem = ({name, imageUrl, price}) => (
    <div className="collection-item">
        <img src={imageUrl} className="item-image"/>
        <p>{name}</p>
        <p>${price}</p>
    </div>
);

export default CollectionItem;