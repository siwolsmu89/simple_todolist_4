import {SELECT_COLOR} from "../actions/colorActions";

export default function colors(state, action) {
    const { colors } = state;
    switch (action.type) {
        case SELECT_COLOR:
            const colorsAfterSelect = [...colors];
            for (const color of colorsAfterSelect) {
                color.active = false;
            }

            const selectedIndex = colors.findIndex(color => color.colorValue === action.colorValue);
            colorsAfterSelect[selectedIndex].active = true;

            return colorsAfterSelect;
        default:
            return colors;
    }
}