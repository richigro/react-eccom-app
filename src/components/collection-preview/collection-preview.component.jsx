import React from 'react';
import './collection-preview.styles.scss';
import { findAllByTitle } from '@testing-library/react';

const MAX_NUMBER_OF_ITEMS_PER_PREVIEW = 4;
const CollectionPreview = ({title, items}) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {
            items.filter(
                (item, idx) => idx < MAX_NUMBER_OF_ITEMS_PER_PREVIEW)
                .map(item => (
                <div key={item.id}>{item.name}</div>
                ))
            }
        </div>
    </div>
);

export default CollectionPreview;