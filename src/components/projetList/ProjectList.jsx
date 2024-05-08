import ProjectCard from "../projetCard/ProjectCard"
import projects from '../../../public/data/projects.json'
import './pListeStyle.scss'

export default function ProjectList() {
    
  return (
      <>
          <h1 className="titleP">Projet Formation:</h1>
        <div className="projectList">
          { projects.formation.map((pe )=> (
        <ProjectCard key={pe.id} projet={pe}/>
          ))}
        </div>
          <h1 className="titleP">Projet Personnel:</h1>
        <div className="projectList">
          { projects.perso.map((pp )=> (
        <ProjectCard key={pp.id} projet={pp}/>
          ))}
        </div>
     </>
    )
  }