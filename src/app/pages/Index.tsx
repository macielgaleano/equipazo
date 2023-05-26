import Image from 'next/image'
import Main from '../components/Main'
import Nav from '../components/Nav'
import Videos from '../components/Videos'
import TeamPage from '../components/Team/Team'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Main />
      <TeamPage />
      <Videos />
    </div>
  )
}
