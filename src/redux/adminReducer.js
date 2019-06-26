const initialState = {
    id: '',
    email: ''
}

const UPDATE_ADMIN = 'UPDATE_ADMIN';
const CLEAR_ADMIN = 'CLEAR_ADMIN';

export function updateAdmin(admin) {
    return {
        type: UPDATE_ADMIN,
        payload: admin
    }
}

export function clearAdmin() {
    return {
        type: CLEAR_ADMIN
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_ADMIN:
            const { id, email } = action.payload
            return {...state, id, email}
        case CLEAR_ADMIN:
                return { ...initialState }
                default:
                    return state
                }
}
            