import { createSlice } from "@reduxjs/toolkit";
import { alertSliceActions } from "./AlertStore";

export const courseListView = () => async (dispatch) => {
    let res = await fetch('courses/courseList')

    let data = await res.json()

    if(data.message){
        dispatch(alertSliceActions.showAlert({message:data.message, variant:'danger'}))
    } else {
        dispatch(courseSliceActions.loadCourses(data))
    }
}


export const courseCreateView = (token, courseObj) => async (dispatch) => {
    let res = await fetch('courses/courseCreate',{
        method: 'POST',
        headers:{
            'Authorization' : `Token ${token}`
        },
        body: courseObj
    })

    let data = await res.json()

    if(data.message){
        dispatch(alertSliceActions.showAlert({message:data.message, variant:'danger'}))
    } else {
        dispatch(courseSliceActions.createCourse(data))
        return true
    }
}


export const courseDetailView = (courseID) => async (dispatch) => {
    let res = await fetch(`courses/courseDetail/${courseID}`)

    let data = await res.json()

    if(data.message){
        dispatch(alertSliceActions.showAlert({message:data.message, variant:'danger'}))
    } else {
        dispatch(courseSliceActions.detailCourse(data))
    }
}


export const courseUpdateView = (token, courseID, courseObj) => async (dispatch) => {
    let res = await fetch(`courses/courseUpdate/${courseID}`,{
        method: 'PUT',
        headers:{
            'Authorization':`Token ${token}`
        },
        body: courseObj
    })

    let data = await res.json()

    if(data.message){
        dispatch(alertSliceActions.showAlert({message:data.message, variant:'danger'}))
    } else {
        dispatch(courseSliceActions.updateCourse(data))
    }
}

export const courseDeleteView = (token, courseID) => async (dispatch) => {
    let res = await fetch(`courses/courseDelete/${courseID}`, {
        method:'DELETE',
        headers:{
            'Authorization':`Token ${token}`
        },
    })

    let data = await res.json()

    if(data.message){
        dispatch(alertSliceActions.showAlert({message:data.message, variant:'danger'}))
    } else {
        dispatch(courseSliceActions.deleteCourse(courseID))
    }
}


const courseSlice = createSlice({
    name: 'course',
    initialState: {
        courses: [],
        course: []
    },
    reducers: {
        loadCourses(state, action){
            return{
                ...state,
                courses: action.payload
            }
        },
        createCourse(state, action){
            return{
                ...state,
                courses: [action.payload].concat(state.courses)
            }
        },
        detailCourse(state, action){
            return{
                ...state,
                course: action.payload
            }
        },
        updateCourse(state, action){
            const updatedCourses = state.courses.map(course => course._id === action.payload._id ? {...course, ...action.payload} : {...course})
            return{
                ...state,
                courses: updatedCourses,
                course: action.payload
            }
        },
        deleteCourse(state, action){
            const updatedCourses = state.courses.filter(course => course._id !== action.payload)
            return{
                ...state,
                courses: updatedCourses
            }
        }
    }
})

export const courseSliceActions = courseSlice.actions
export default courseSlice.reducer