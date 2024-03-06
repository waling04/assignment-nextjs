const getQuizById = async (id: string) => {
  try {
    const res = await fetch(`/api/quiz/${id}`, {
      cache: 'no-store',
    })
    if (!res.ok) {
      throw new Error('Failed to fetch product')
    }
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export default getQuizById
