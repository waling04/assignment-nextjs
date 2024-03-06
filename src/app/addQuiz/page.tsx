'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

const AddQuiz = () => {
  const [testId, setTestId] = useState('')
  const [question, setQuestion] = useState('')
  const [choiceA, setChoiceA] = useState('')
  const [choiceB, setChoiceB] = useState('')
  const [choiceC, setChoiceC] = useState('')
  const [choiceD, setChoiceD] = useState('')
  const [answer, setAnswer] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    if (
      !testId ||
      !question ||
      !choiceA ||
      !choiceB ||
      !choiceC ||
      !choiceD ||
      !answer
    ) {
      alert('All field are required')
    }
    try {
      const res = await fetch('/api/quiz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          testId,
          question,
          choiceA,
          choiceB,
          choiceC,
          choiceD,
          answer,
        }),
      })
      if (res.ok) {
        router.push('/quiz-list')
      } else {
        throw new Error('Failed to add question')
      }
      console.log('Success')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex flex-col justify-center items-center mt-8">
      <div className="font-bold text-3xl text-center rounded p-2 text-gray-800 mb-4">
        add more QuiZZzzz
      </div>
      <form
        onSubmit={handleSubmit}
        className="px-8 flex flex-col gap-3 justify-center items-center bg-gray-700 text-white py-8 rounded-xl"
      >
        <fieldset>
          <input
            type="text"
            name="testId"
            id="testId"
            onChange={(e) => setTestId(e.target.value)}
            value={testId}
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
            onChange={(e) => setQuestion(e.target.value)}
            value={question}
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
            onChange={(e) => setChoiceA(e.target.value)}
            value={choiceA}
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
            onChange={(e) => setChoiceB(e.target.value)}
            value={choiceB}
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
            onChange={(e) => setChoiceC(e.target.value)}
            value={choiceC}
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
            onChange={(e) => setChoiceD(e.target.value)}
            value={choiceD}
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
            onChange={(e) => setAnswer(e.target.value)}
            value={answer}
            placeholder="Answer"
            className="text-black p-2"
          ></textarea>
        </fieldset>
        <br />
        <button
          type="submit"
          className="w-[150px] bg-gray-200 text-gray-900 rounded py-1"
        >
          Add Question
        </button>
      </form>
    </div>
  )
}

export default AddQuiz
