import {Component} from "react";

class ColorChip extends Component {

    render() {
        const { colorValue, active, onClick } = this.props;
        return (
            <div className={ `color ${ active ? 'active' : '' }` }
                onClick={(e) => {
                    e.stopPropagation();
                    onClick(colorValue); } }
                style={ { background: colorValue } }>
            </div>
        );
    }
}

export default ColorChip;