import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'
import { auth } from '../auth'

const SettingPage = async () => {
  const session = await auth()
  if (!session) redirect('/api/auth/signin')
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      {session.user?.role === 'admin' ? (
        <p>Authorized User</p>
      ) : (
        <p>You are logged in but not authorized to view this page.</p>
      )}
      <div className="flex">
        <Link
          href="/quiz-list"
          className="bg-gray-600 text-white rounded-lg p-2 m-2"
        >
          Manage Quiz!
        </Link>
        <Link
          href="/addQuiz"
          className="bg-gray-600 text-white rounded-lg p-2 m-2"
        >
          Add Quiz!
        </Link>
      </div>
    </div>
  )
}

export default SettingPage
