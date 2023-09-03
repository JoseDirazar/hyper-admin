import Navbar from '../../components/navbar'
import FetchUsers from '../(dashboard)/users/components/users'
import { Buttons } from '../(dashboard)/users/components/toast'
import Link from 'next/link'


export default function Home() {
  return (<>
   {/*  <Navbar /> */}
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Hyper Admin</div>
      <div>
      <Link href='/sales'>Sales</Link>
      <Link href='/users'>Users</Link>
      </div>
      <Buttons />
     
    </main>
  </>
  )
}
