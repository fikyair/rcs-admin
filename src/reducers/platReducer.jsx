import {
    API_GET_PROVINCE
} from '../utils/ActionsType';


const initialState = {
    provinceData: [],
}

export default function (state = initialState, action) {
    switch (action.type){
        case API_GET_PROVINCE[1]:
            return {
                ...state,
                provinceData: action.data
            }
        default:
            return state
    }

}

