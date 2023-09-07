import { createStore } from "redux";

const initialState = {
  selectedOption: '', // 선택한 옵션 (shop, date, product)
};

const SET_SELECTED_OPTION = 'SET_SELECTED_OPTION';

//액션 생성자
export function setSelectedOption(option){
    return {
        type: SET_SELECTED_OPTION,
        payload: option,
    };
}

//리듀서
function reducer(state = initialState,action){
    switch (action.type){
        case SET_SELECTED_OPTION:
            return {
                ...state,
                selectedOption: action.payload,
            };
            default:
                return state;
    }
}

const store = createStore(reducer);

export default store;