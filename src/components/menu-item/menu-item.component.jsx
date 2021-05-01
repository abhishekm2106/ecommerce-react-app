import React from 'react';
import './menu-item.styles.scss';
import {withRouter} from 'react-router-dom';

const MenuItem = ({title,imageUrl,size,linkUrl,history , match}) => (
    <div onClick = {() => history.push(`${match.url}${linkUrl}`)} 
     className={`${size} menu-item`}>

        <div className="background-image" style={{backgroundImage:`url(${imageUrl})`}}></div>
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">shop now</span>
        </div>
    </div>
)

export default withRouter(MenuItem);