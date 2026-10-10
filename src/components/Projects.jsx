import { projects } from '../data.js'
import ImageWithFallback from './ImageWithFallback.jsx'

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">My Project</h2>
      <ul className="projects__grid">
        {projects.map((p) => (
          <li key={p.id} className={`project ${p.indent ? 'project--indent' : ''}`}>
            <a href={p.link} className="project__link" aria-label={p.title}>
              <div className="project__thumb" style={{ '--w': `${p.thumb.w}px`, '--h': `${p.thumb.h}px` }}>
                <ImageWithFallback src={p.image} alt={`${p.title} preview`} label="Preview" />
              </div>
              <div className="project__body">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
