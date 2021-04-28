import {Component} from "react";
import './FilterSelector.css';

class FilterSelector extends Component {

    render() {
        return (
            <div className="filter-selector">
                <div className="filter-check">
                    <input type="checkbox" />
                    <span> 마감된 할 일 표시 </span>
                </div>
                <div className="filter-check">
                    <input type="checkbox" />
                    <span>삭제된 할 일 표시</span>
                </div>
                <div className="filter-select">
                    <select>
                        <option selected disabled> --------- 정렬 기준 -------- </option>
                        <option>등록일 오름차순</option>
                        <option>등록일 내림차순</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default FilterSelector;