const initialState = {
    quote : 'Quote goes here',
    favorites : [],
    loading : false,
}


export default kanyeReducer = (state = initialState, action) => {
    const { type, data } = action

    switch (type) {
        case "SET_QUOTE":
            return {
                ...state,
                quote : data
            }
        case "ADD_QUOTE_FAVORITE":
            return {
                ...state,
                favorites : [...state.favorites, data]
            }
        case "SET_QUOTE_LOADING":
            return {
                ...state,
                loading: data
            }
        default:
            return state;
    }

}