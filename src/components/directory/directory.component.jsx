import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import {connect} from 'react-redux';
import {sectionSelector} from '../../redux/directory/directory.selector';
import {createStructuredSelector} from 'reselect'


const Directory = ({sections})=> (
            <div className="directory-menu">
                {
                    sections.map(({id,...sectionProps})=>(
                        <MenuItem key={id} {...sectionProps}/>
                    ))
                }
            </div>
        );


const mapStateToProps = createStructuredSelector({
  sections: sectionSelector
})


export default connect(mapStateToProps)(Directory);