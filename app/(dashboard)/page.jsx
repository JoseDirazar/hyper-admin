import Navbar from '../../components/navbar'
import FetchUsers from './components/users'
import { Buttons } from './components/toast'


export default function Home() {
  return (<>
    <Navbar />
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>sdasdasdas</div>
      <Buttons />
      <FetchUsers />
    </main>
  </>
  )
}
