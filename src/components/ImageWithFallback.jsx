import { useState } from 'react'

// Shows the image; if the file is missing, shows a placeholder block instead.
export default function ImageWithFallback({ src, alt, className = '', label }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className={`placeholder ${className}`} role="img" aria-label={alt}>
        <span>{label ?? alt}</span>
      </div>
    )
  }
  return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} loading="lazy" />
}
