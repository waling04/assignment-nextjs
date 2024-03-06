'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

type PropsType = {
  id: string
  testId: string
  question: string
  choiceA: string
  choiceB: string
  choiceC: string
  choiceD: string
  answer: string
}

const EditQuiz = ({
  id,
  testId,
  question,
  choiceA,
  choiceB,
  choiceC,
  choiceD,
  answer,
}: PropsType) => {
  const [newTestId, setNewTestId] = useState(testId)
  const [newQuestion, setNewQuestion] = useState(question)
  const [newChoiceA, setNewChoiceA] = useState(choiceA)
  const [newChoiceB, setNewChoiceB] = useState(choiceB)
  const [newChoiceC, setNewChoiceC] = useState(choiceC)
  const [newChoiceD, setNewChoiceD] = useState(choiceD)
  const [newAnswer, setNewAnswer] = useState(answer)

  const router = useRouter()
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      const res = await fetch(`/api/quiz/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          newTestId,
          newQuestion,
          newChoiceA,
          newChoiceB,
          newChoiceC,
          newChoiceD,
          newAnswer,
        }),
      })
      if (!res.ok) {
        throw new Error('Failed to update quiz')
      }
      // console.log('first: ', res);
      router.refresh()
      router.push('/quizzes')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex flex-col justify-center items-center mt-8">
      <form
        onSubmit={handleSubmit}
        className="px-8 flex flex-col gap-3 justify-center items-center bg-gray-700 text-white py-8 rounded-xl"
      >
        <fieldset>
          <input
            type="text"
            name="testId"
            id="testId"
            onChange={(e) => setNewTestId(e.target.value)}
            value={newTestId}
            placeholder="test id"
            className="text-black p-2"
          />
        </fieldset>
        <fieldset>
          <label /> Question <br />
          <textarea
            name="question"
            id="question"
            cols={40}
            rows={3}
            onChange={(e) => setNewQuestion(e.target.value)}
            value={newQuestion}
            placeholder="Question"
            className="text-black p-2"
          />
        </fieldset>
        <fieldset>
          {' '}
          <label /> Choice A <br />
          <textarea
            name="choiceA"
            id="choiceA"
            cols={40}
            rows={3}
            onChange={(e) => setNewChoiceA(e.target.value)}
            value={newChoiceA}
            placeholder="Choice A"
            className="text-black p-2"
          ></textarea>
        </fieldset>

        <fieldset>
          <label /> Choice B <br />
          <textarea
            name="choiceB"
            id="choiceB"
            cols={40}
            rows={3}
            onChange={(e) => setNewChoiceB(e.target.value)}
            value={newChoiceB}
            placeholder="Choice B"
            className="text-black p-2"
          ></textarea>
        </fieldset>

        <fieldset>
          <label /> Choice C <br />
          <textarea
            name="choiceC"
            id="choiceC"
            cols={40}
            rows={3}
            onChange={(e) => setNewChoiceC(e.target.value)}
            value={newChoiceC}
            placeholder="Choice C"
            className="text-black p-2"
          ></textarea>
        </fieldset>

        <fieldset>
          <label /> Choice D <br />
          <textarea
            name="choiceD"
            id="choiceD"
            cols={40}
            rows={3}
            onChange={(e) => setNewChoiceD(e.target.value)}
            value={newChoiceD}
            placeholder="choice D"
            className="text-black p-2"
          ></textarea>
        </fieldset>
        <br />
        <fieldset>
          <label /> Answer <br />
          <textarea
            name="answer"
            id="answer"
            cols={40}
            rows={3}
            onChange={(e) => setNewAnswer(e.target.value)}
            value={newAnswer}
            placeholder="Answer"
            className="text-black p-2"
          ></textarea>
        </fieldset>
        <br />
        <button
          type="submit"
          className="w-[150px] bg-gray-200 text-gray-900 rounded py-1"
        >
          Update Question
        </button>
      </form>
    </div>
  )
}

export default EditQuiz
