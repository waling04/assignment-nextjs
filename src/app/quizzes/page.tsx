'use client'

import { useEffect, useState } from 'react'
import getQuizzes from '../components/action/getQuizAction'

const QuizComponent = () => {
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

  // submit function
  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log('answer: ')
  }

  // console.log("quizzes from action:", quizzes);
  return (
    <div>
      <div className="flex justify-center items-center gap-6 mt-10">
        <div className="bg-gray-500 p-8">
          <form className="text-white" onSubmit={handleSubmit}>
            {quizzes.map((q: any) => (
              <div key={q.id}>
                <p className="font-bold">{q.question}</p>
                <span>
                  <input type="checkbox" className="mr-2" />
                  {q.choiceA}
                </span>
                <br />
                <span>
                  <input type="checkbox" className="mr-2" />
                  {q.choiceB}
                </span>
                <br />
                <span>
                  <input type="checkbox" className="mr-2" />
                  {q.choiceC}
                </span>
                <br />
                <span>
                  <input type="checkbox" className="mr-2" />
                  {q.choiceD}
                </span>
                <br />
                <hr />
                <br />
              </div>
            ))}
            <div className="flex justify-center items-center">
              <button type="submit" className="bg-blue-700 rounded p-2">
                ส่งคำตอบ
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default QuizComponent
