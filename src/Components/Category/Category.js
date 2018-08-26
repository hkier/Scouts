import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Item from '../Item'

class Category extends Component {

    constructor(props) {
        super(props);
    };

    render() {
        let cats = this.props.cats;
        return (
            <div>
                {cats.map((cat) =>
                    <div>
                        {cat}
                        <Item />
                        
                    </div>
                )
                }
            </div>
        )
    }
}
export default Category;



