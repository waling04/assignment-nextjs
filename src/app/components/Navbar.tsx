import Link from 'next/link'
import { auth } from '../auth'

const Navbar = async () => {
  const session = await auth()
  return (
    <div className="flex justify-end items-center gap-6 pr-8 bg-gray-800 text-white h-[70px]">
      <Link href="/">Home</Link>
      <Link href="/quizzes">Quiz</Link>
      <Link href="/settings">Setting</Link>
      {session ? <Link href="/api/auth/signout">Logout</Link> : ''}
    </div>
  )
}

export default Navbar
