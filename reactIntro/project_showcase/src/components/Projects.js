import Project from './Project'

export default function Projects(props){
    return (
        <div>
            <h1 className='title'>Tutorial / Roadmap - กวดวิชา / แผนงาน</h1>
            <div>
                {props.projects.map((project) => project.category === 'tutorial' && <Project key={project.id} project={project}/>)}
            </div>
            <h1 className='title'>Basic Projects - โครงการพื้นฐาน</h1>
            <div className='projects'>
                {props.projects.map((project) => project.category === 'basic' && <Project key={project.id} project={project}/>)}
            </div>
        </div>
    )
}