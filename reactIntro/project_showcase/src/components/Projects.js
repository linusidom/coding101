import Project from './Project'

export default function Projects(props){
    return (
        <div>
            <h1 className='title'>Basic Projects - โครงการพื้นฐาน</h1>
            <div className='projects'>
                {props.projects.map((project) => <Project key={project.id} project={project}/>)}
            </div>
        </div>
    )
}