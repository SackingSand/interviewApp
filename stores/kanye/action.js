export const setQuote = (data) => {
    return (dispatch) => {
        dispatch({
            type: 'SET_QUOTE',
            data
        })
    }
}

export const addToFavorite = ({quote, onSuccess, onError}) => {
    return (dispatch, getState) => {
        const { favorites } = getState().KanyeReducer
        try {
            if(!quote || quote === ''){
                throw({ message : 'Cannot set empty quotes to favorites'})
            }

            const found = favorites.find((item) => item === quote)
            if(!found){
                if(onSuccess){
                    onSuccess()
                }
                dispatch({
                    type: 'ADD_QUOTE_FAVORITE',
                    data : quote
                })
            } else {
                if(onError){
                    throw({ message : 'The quote is already stored in favorites'})
                }
            }

        } catch(err) {
            if(onError){
                onError({
                    message : err.message ? err.message : 'Error Occured'
                })
            }
        }
    }
}

export const setLoading = (data) => {
    return (dispatch) => {
        dispatch({
            type: 'SET_QUOTE_LOADING',
            data
        })
    }
}