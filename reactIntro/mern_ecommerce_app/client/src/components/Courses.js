import { useEffect, useState } from "react"
import { Card } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { courseListView } from "../store/CourseStore"
import { AlertComponent } from "./AlertComponent"
import { Course } from "./Course"

export const Courses = () => {
    
    const courses = useSelector(state => state.course.courses)
    
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const loadCourses = async () => {
            await dispatch(courseListView())
            setLoading(false)
        }

        loadCourses()

    }, [dispatch])

    return !loading ? courses.length > 0 ?
    
        <div className="flex">
                <AlertComponent/>
                {courses.map(course => <Course key={course._id} course={course}/>)}
            
        </div>
     : <Card>No Posts Yet</Card> : <Card>...Loading</Card>
}