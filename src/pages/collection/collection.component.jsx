import React from 'react';
import './collection.styles.scss'
import {connect} from 'react-redux'
import CollectionItem from '../../components/collection-item/collection-item.component'
import {selectCollection } from '../../redux/shop/shop.selector'

const CollectionPage = ({match,collection})=>{
    console.log(collection.items)
    return(
    <div className="collection-page">
        <div className="title">{collection.title}</div>
        <div className="items">
        {
            collection.items.map(item=><CollectionItem className='collection-item' key={item.id} item={item}/>)
        }
        </div>

    </div>
    )
}

const mapStateToProps = (state,otherprops)=>({
    collection: selectCollection(otherprops.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)