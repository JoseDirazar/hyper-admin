import Navbar from '../../components/navbar'
import FetchUsers from '../(dashboard)/users/components/users'

import Link from 'next/link'


export default function Home() {
  return (
   <main className="flex min-h-screen flex-col pt-40  bg-pinkChip ">
  <h1 className="text-4xl font-bold text-center mb-8">Hyper Admin</h1>
  <div className="flex flex-col items-center space-y-4">
    <Link href="/sales" className="text-purpleNav border-spacing-2 text-bold hover:underline">
      Sales
    </Link>
    <Link href="/users" className="text-purpleNav border-spacing-2 text-bold hover:underline">
      Users
    </Link>
    <Link href="/events" className="text-purpleNav border-spacing-2 text-bold hover:underline">
      Events
    </Link>
    <Link href="/comments" className="text-purpleNav border-spacing-2 text-bold hover:underline">
      Comments
    </Link>
  </div>
</main> 
  )
}
