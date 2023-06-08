import * as actionTypes from './ActionTypes'

export function getUserSuccess(news) {
    return { type: actionTypes.LOGIN, payload:news}
}

export function login(email, password) {
    let url="http://localhost:3000/users"
   
    return function (dispatch) {
        fetch(url)
        .then((response)=>response.json())
            .then((result) =>{ 
                var user = result.find(x=>(x.email === email || x.username ===email) && x.password === password)
                dispatch(getUserSuccess(user))})
    }
}

export function logout() {
    return function (dispatch) {
    dispatch(getUserSuccess({}))
}
}