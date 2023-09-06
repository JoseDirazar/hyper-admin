import Navbar from '../../components/navbar'
import FetchUsers from '../(dashboard)/users/components/users'

import Link from 'next/link'


export default function Home() {
  return (
   <main className="flex min-h-screen flex-col items-center justify-center p-24">
  <h1 className="text-4xl font-bold text-center mb-8">Hyper Admin</h1>
  <div className="flex flex-col items-center space-y-4">
    <Link href="/sales" className="text-slate-200 hover:underline">
      Sales
    </Link>
    <Link href="/users" className="text-slate-200 hover:underline">
      Users
    </Link>
    <Link href="/events" className="text-slate-200 hover:underline">
      Events
    </Link>
    <Link href="/comments" className="text-slate-200 hover:underline">
      Comments
    </Link>
  </div>
</main> 
  )
}
