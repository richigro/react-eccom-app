import React from 'react';
import './collection-preview.styles.scss';
import { findAllByTitle } from '@testing-library/react';
import CollectionItem from '../collection-item/collection-item.components';

const MAX_NUMBER_OF_ITEMS_PER_PREVIEW = 4;
const CollectionPreview = ({title, items}) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {
            items.filter(
                (item, idx) => idx < MAX_NUMBER_OF_ITEMS_PER_PREVIEW)
                .map(({id, ...itemsProps}) => (
                <CollectionItem key={id} {...itemsProps}/>
                ))
            }
        </div>
    </div>
);

export default CollectionPreview;