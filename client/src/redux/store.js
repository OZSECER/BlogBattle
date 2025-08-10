import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'  // Örnek slice
import authReducer from './reducers/auth'
import modalReducer from './reducers/modal'
import postReducer from './reducers/post'

const store = configureStore({
    reducer: {
        counter: counterReducer,  // dilersen buraya başka slice’lar ekleyebilirsin
        auth: authReducer,
        modal: modalReducer,
        posts: postReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;


