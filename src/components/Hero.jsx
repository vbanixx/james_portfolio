import { profile } from '../data.js'
import ImageWithFallback from './ImageWithFallback.jsx'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__intro">
        <div className="hero__photo">
          <ImageWithFallback src={profile.photo} alt={`Portrait of ${profile.name}`} label="Your photo" />
        </div>
        <div className="hero__text">
          <p className="hero__hi">Hi, I am</p>
          <h1 className="hero__name">
            <span>{profile.name}</span>...
          </h1>
        </div>
      </div>
      <h2 className="hero__role">{profile.role}</h2>
    </section>
  )
}
