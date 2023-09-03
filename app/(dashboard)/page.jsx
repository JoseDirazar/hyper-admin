import Navbar from '../../components/navbar'
import FetchUsers from './users/components/users'
import { Buttons } from './users/components/toast'


export default function Home() {
  return (<>
    <Navbar />
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Hyper Admin</div>
      <Buttons />
     
    </main>
  </>
  )
}
