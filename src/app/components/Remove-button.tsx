import { useRouter } from 'next/navigation'

type PropsType = {
  id: string
}

const RemoveQuizBtn = ({ id }: PropsType) => {
  const router = useRouter()
  const removeQuiz = async () => {
    const confirmed = confirm('Are you sure?')
    if (confirmed) {
      const res = await fetch(`/api/quiz?id=${id}`, {
        method: 'DELETE',
      })
      if (res.ok) {
        router.push('/quiz-list')
      }
    }
  }

  return (
    <button onClick={removeQuiz} className="bg-blue-700 rounded p-2">
      Delete
    </button>
  )
}

export default RemoveQuizBtn
