const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_LOADING':
            return{
                ...state,
                isLoading: true
            }
        case 'GET_DATA':
            return {
                ...state,
                isLoading: false,
                location: action.payload.location,
                current: action.payload.current
            }  
        case 'SEARCH_LOCATION':
            return {
                ...state,
                query: action.payload,
            } 
        default:
            return state;
    }
    
}

export default reducer