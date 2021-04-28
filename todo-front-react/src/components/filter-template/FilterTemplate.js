import { Component } from "react";
import "./FilterTemplate.css"

class FilterTemplate extends Component {
    render() {
        const { palette, filterSelector } = this.props;
        return(
            <div className="todo-filter">
                <section className="palette-wrapper">
                    { palette }
                </section>
                <section className="filter-wrapper">
                    { filterSelector }
                </section>
            </div>
        );
    }
}

export default FilterTemplate;