import { Component } from "react";
import PropTypes from 'prop-types';

class MyComponent extends Component {
    static defaultProps = {
        name: '기본이름'
    };
    static propTypes = {
        name: PropTypes.string,
        favoriteNumber: PropTypes.number.isRequired
    };
    render() {
        const {name, favoriteNumber, children} = this.props;
        return (
            <div className="react" style={{backgroundColor:'navy', color:'white'}}>
                MyComponentClass : {name}, favoriteNumber : {favoriteNumber}, children: {children}
            </div>
        );
    }
}

export default MyComponent;