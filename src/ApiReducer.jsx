



export const reducer = (state, action) => {
    switch(action.type) {
        case "FETCH_SUCCESS":
            return {...state, post:action.payload, loading: false, error: ''}
        case "FETCH_ERROR":
            return {
                loading: false,
                
                error: 'Something error!'
            }

        default:
            return state
    }
}
