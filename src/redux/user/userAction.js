import { FETCH_USER_REQ, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from "./userType";
import axios from 'axios';

export const fetchUserReq = () => {

    return {
        type: FETCH_USER_REQ

    }
}

export const fetchUserSucess = (users) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}

export const fetchUserFailure = (err) => {
    return {
        type: FETCH_USER_FAILURE,
        payload: err
    }
}


export const fetchUsers = () => async (dispatch) => {
    try {
        dispatch({ type: FETCH_USER_REQ })

        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
        dispatch({ type: FETCH_USER_SUCCESS, payload: data })
    } catch (e) {
        dispatch({
            type: FETCH_USER_FAILURE,
            payload: e
        })
    }
}

// It is used for async call and it will return another function using thunk middleware and it can have async
// export const fetchUsers = () => {
//     return (dispatch) => {
//         dispatch(fetchUserReq)
//         axios.get('https://jsonplaceholder.typicode.com/users')
//             .then((response) => {
//                 const users = response.data;
//                 dispatch(fetchUserSucess(users))
//             }).catch((err) => {
//                 const errorMsg = err.message
//                 dispatch(fetchUserFailure(errorMsg))
//             })
//     }
// }



//Same Thing using object in dispatch


// export const fetchUsersCheck = () => {
//     return (dispatch) => {
//         dispatch({
//             type: FETCH_USER_REQ
//         })
//         axios.get('https://jsonplaceholder.typicode.com/users')
//             .then((res) => {
//                 const result = res.data;
//                 dispatch({
//                     type: FETCH_USER_SUCCESS,
//                     payload:result
//                 })
//             }).catch(err => {
//                 dispatch({
//                     type: FETCH_USER_FAILURE,
//                     payload:err
//             })
//         })
//     }
// }