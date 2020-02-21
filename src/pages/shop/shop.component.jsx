import React from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

export default class ShopPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            collections: SHOP_DATA
        };
    }

    render(){
        //destructure collections
        const {collections} = this.state;
        return (
            <div className="shop-page">
                <h1>Shop page</h1>
                {
                collections.map(({id, ...otherCollectionProps}) =>  (
                <CollectionPreview key={id} {...otherCollectionProps}/>)
                )}                
            </div>
        );
    }
}