'use client'

import getQuizById from '@/app/components/action/getQuizById'
import { useEffect, useState } from 'react'
import EditQuiz from '../../components/EditQuizForm'

type PropsType = {
  params: any
}

const EditQuizForm = ({ params }: PropsType) => {
  const { id } = params
  const [quiz, setQuiz] = useState(null)

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const data = await getQuizById(id)
        setQuiz(data.quiz)
      } catch (error) {
        console.log('Error fetching quiz: ', error)
      }
    }
    fetchQuiz()
  }, [id])

  if (!quiz) {
    return <div>Loading...</div>
  }
  const { testId, question, choiceA, choiceB, choiceC, choiceD, answer } = quiz

  return (
    <div>
      <EditQuiz
        id={id}
        testId={testId}
        question={question}
        choiceA={choiceA}
        choiceB={choiceB}
        choiceC={choiceC}
        choiceD={choiceD}
        answer={answer}
      />
    </div>
  )
}

export default EditQuizForm
