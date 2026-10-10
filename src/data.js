// All editable content lives here.
export const profile = {
  name: 'James Obcianal',
  role: "I'm a Back-end Developer / UI Designer",
  photo:'/ban.png',
  quote:
    '"I\'m currently studying to build modern digital solutions, honing my skills in software development and UI/UX design"',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Project', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const projects = [
  {
    id: 'reverend-insanity',
    title: 'Reverend Insanity E-commerce',
    description:
      "\u201CAn online book store interface featuring a dynamic product summary, pricing, and an interactive 'Add to Cart' quantity selector.\u201D",
    image:'/rev.png',
    thumb: { w: 115, h: 115 },
    link: '#',
  },
  {
    id: 'spotify-ui',
    title: 'Spotify UI Mockup',
    description:
      '\u201CA customized music player interface tailored for playlists like Indie Pop, featuring dark mode aesthetic and immersive wave graphics.\u201D',
    image:'/spot.png',
    thumb: { w: 186, h: 140 },
    link: '#',
  },
  {
    id: 'commnect',
    title: 'Commnect - Barangay Information System',
    description:
      '\u201CA collaborative group project designed to digitize and improve barangay services. It features calendar events, announcements, and contact information for local residents, promoting better community connection.\u201D',
   image:'/comm.png',
    thumb: { w: 110, h: 105 },
    link: '#',
    
  },
  {
    id: 'kwill',
    title: 'KWILL Management Dashboard',
    description:
      '\u201CA comprehensive web interface designed for agricultural tracking, featuring key metrics for crop totals and financial overviews alongside dynamic charts to monitor farm productivity.\u201D',
   image:'/dash.png',
    thumb: { w: 183, h: 103 },
    link: '#',
  },
]

export const contacts = [
  { id: 'mail', text: 'jobcianal06@gmail.com', href: 'mailto:jobcianal06@gmail.com' },
  { id: 'github', text: 'jobcianal', href: 'https://github.com/jobcianal' },
  { id: 'instagram', text: 'jamesobianal', href: 'https://instagram.com/jamesobianal' },
  { id: 'figma', text: 'vbanixx', href: '#' },
  { id: 'phone', text: '09393150234', href: 'tel:09393150234' },
]
