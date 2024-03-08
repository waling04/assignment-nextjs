import { redirect } from 'next/navigation'
import { auth } from './auth'

export default async function Home() {
  const session = await auth()
  if (!session) redirect('/api/auth/signin')
  console.log('session from page: ',session);
  return (
    <>
      <div className="max-w-xl mx-auto mt-20 flex flex-col justify-center items-center mt-20">
        <div className="text-4xl text-gray-800">
          Welcome{' '}
          <span className="text-gray-700 font-bold">{session.user?.username}</span>!
        </div>
        <div>Role: {session.user?.role}</div>
      </div>
    </>
  )
}
