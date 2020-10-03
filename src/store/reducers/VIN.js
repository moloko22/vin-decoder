const initialState = {
    decodeVINItem: [],
    lastVINSearch: [],
    variablesList: [],
    variablesItem: [],
    requestMessage: '',
};


export function VIN (state = initialState, action) {
    switch(action.type){
        case 'DECODE_VIN' : {
            return {...state, requestMessage: action.payload.result.Message,
                decodeVINItem: action.payload.result.Results,
                variablesList: action.payload.result.Results,
                lastVINSearch: [{VIN: action.payload.VIN},
                    ...state.lastVINSearch]
            };
        }
        case 'GET_VARIABLES_LIST': {
            return {...state, variablesList: action.payload.Results,requestMessage: action.payload.Message};
        }case 'GET_VARIABLE_ITEM': {
            return {...state, variableItem: action.payload.Results, requestMessage: action.payload.Message};
        }
        default: return state;
    }
}