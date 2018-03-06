import {
    API_GET_PROVINCE
} from '../utils/ActionsType';


const initialState = {
    NavProvinceData: [],
}

export default function (state = initialState, actions) {
    switch (actions.type){
        case API_GET_PROVINCE[1]:
            debugger
            return {
                ...state,
                NavProvinceData: actions.data
            }
        default:
            return state;
    }

}

