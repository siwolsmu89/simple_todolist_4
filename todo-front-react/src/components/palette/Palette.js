import {Component} from "react";
import './Palette.css';
import ColorChip from "./color-chip/ColorChip";

class Palette extends Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.props.colors !== nextProps.colors;
    }

    render() {
        const { colors, onSelect } = this.props;
        const colorChips = colors.map(
            ({ id, colorValue, active }) => (
                <ColorChip
                    key={ id }
                    id={ id }
                    colorValue={ colorValue }
                    active={ active }
                    onClick={ onSelect }
                />
            )
        );

        return (
            <div className="palette">
                { colorChips }
            </div>
        );
    }
}

export default Palette;