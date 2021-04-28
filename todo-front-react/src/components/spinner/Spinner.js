import { Component } from 'react';
import Loader from "react-loader-spinner";
import './Spinner.css'

class Spinner extends Component {
    render() {
        const { fetching } = this.props;
        return (
            <div className={`spinner ${ fetching.isFetching ? 'active' : '' }`}>
                <Loader
                    type="Oval"
                    color="#f03e3e"
                    height={200}
                    width={100}
                />
            </div>
        );
    }
}

export default Spinner;