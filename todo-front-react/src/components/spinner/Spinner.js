import { Component } from 'react';
import Loader from "react-loader-spinner";
import './Spinner.css'

class Spinner extends Component {
    render() {
        const { fetching, colors } = this.props;
        const activeColorIndex = colors.findIndex(color => color.active === true );
        const activeColorValue = colors[activeColorIndex].colorValue;

        return (
            <div className={`spinner ${ fetching.isFetching ? 'active' : '' }`}>
                <Loader
                    type="Oval"
                    color={ activeColorValue }
                    height={200}
                    width={100}
                />
            </div>
        );
    }
}

export default Spinner;