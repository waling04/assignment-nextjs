const getQuizzes = async () => {
  try {
    const res = await fetch('/api/quiz', {
      cache: 'no-store',
    })
    if (!res.ok) {
      throw new Error('Failed to fetch quizzes')
    }
    return res.json()
  } catch (error) {
    console.log('Error loading quizzes:', error)
    return { error: 'Failed to fetch quizzes' }
  }
}

export default getQuizzes
