import { useEffect } from "react"


export const Dashboard = () => {

    useEffect(() => {
        fetch('/posts/stats')
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])


    return (
        <div>This route will be protected:</div>
    )
}