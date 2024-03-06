'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import RemoveQuizBtn from '../components/Remove-button'
import getQuizzes from '../components/action/getQuizAction'

const QuizList = () => {
  const [quizzes, setQuizzes] = useState([])

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const { quizzes } = await getQuizzes()
        setQuizzes(quizzes)
      } catch (error) {
        console.log('Error loading quizzes:', error)
      }
    }
    fetchQuizzes()
  }, [])

  return (
    <div>
      <div className="flex justify-center items-center gap-6 mt-10">
        <div className="bg-gray-500 p-8 rounded-lg">
          {quizzes.map((q: any) => (
            <div key={q.id}>
              <div className="flex my-2 text-gray-300">
                <p className="font-bold w-[20%]">ข้อที่ {q.testId}</p>
                <p className="w-full">{q.question}</p>
                <Link href={`edit-quiz/${q._id}`}>
                  <button
                    type="button"
                    className="bg-blue-700 rounded p-2 mr-2"
                  >
                    Edit
                  </button>
                </Link>
                <RemoveQuizBtn id={q._id} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default QuizList
