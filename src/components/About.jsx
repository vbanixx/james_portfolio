import { profile } from '../data.js'
import TechOrbit from './TechOrbit.jsx'

export default function About() {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <p className="about__quote">{profile.quote}</p>
      <TechOrbit />
    </section>
  )
}
