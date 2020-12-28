import React from 'react';
import './homepage.styles.scss';

const Homepage = () => (
    <div className="homePage">
        <div className="directory-menu">
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Hat</h1>
                    <span className="subtitle">shop now</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Jackets</h1>
                    <span className="subtitle">shop now</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Snickers</h1>
                    <span className="subtitle">shop now</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">mens</h1>
                    <span className="subtitle">shop now</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">womens</h1>
                    <span className="subtitle">shop now</span>
                </div>
            </div>
        </div>
    </div>
)


export default Homepage;