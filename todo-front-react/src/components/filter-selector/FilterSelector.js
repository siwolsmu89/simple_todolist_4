import {Component} from "react";
import './FilterSelector.css';

class FilterSelector extends Component {

    render() {
        const { filters, refreshFilter } = this.props;
        let refreshedFilters = {...filters};

        return (
            <div className="filter-selector">
                <div className="filter-check">
                    <input type="checkbox"
                           readOnly
                           checked={ filters.isDisplayFinishedTodo ? 'checked' : '' }
                           onClick={ (e) => {
                               refreshedFilters.isDisplayFinishedTodo = e.target.checked;
                               refreshFilter(refreshedFilters);
                           } }
                    />
                    <span> 마감된 할 일 표시 </span>
                </div>
                <div className="filter-check">
                    <input type="checkbox"
                           readOnly
                           checked={ filters.isDisplayRemovedTodo ? 'checked' : '' }
                           onClick={ (e) => {
                               refreshedFilters.isDisplayRemovedTodo = e.target.checked;
                               refreshFilter(refreshedFilters);
                           } }
                    />
                    <span>삭제된 할 일 표시</span>
                </div>
                <div className="filter-select">
                    <select
                        defaultValue={'default'}
                        onChange={ (e) => {
                            refreshedFilters = { ...filters, orderCondition: e.target.value };
                            refreshFilter(refreshedFilters);
                        } }
                    >
                        <option value="default" disabled> --------- 정렬 기준 -------- </option>
                        <option value="CREATED ASC">등록일 오름차순</option>
                        <option value="CREATED DESC">등록일 내림차순</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default FilterSelector;