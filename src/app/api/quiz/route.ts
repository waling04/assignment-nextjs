import { connect } from '@/dbConfig/dbConfig'
import Quiz from '@/models/quiz'
import { NextResponse } from 'next/server'

type PropsType = {
  id: string
  testId: string
  question: string
  choiceA: string
  choiceB: string
  choiceC: string
  choiceD: string
  answer: string
  json: any
  nextUrl: any
}

export async function GET() {
  await connect()
  const quizzes = await Quiz.find()
  // console.log('quizzes:', quizzes)
  return NextResponse.json({ quizzes })
}

export async function POST(request: PropsType) {
  const { testId, question, choiceA, choiceB, choiceC, choiceD, answer } =
    await request.json()
  await connect()
  await Quiz.create({
    testId,
    question,
    choiceA,
    choiceB,
    choiceC,
    choiceD,
    answer,
  })
  return NextResponse.json({ message: 'Question Added' }, { status: 201 })
}

export async function DELETE(request: PropsType) {
  const id = request.nextUrl.searchParams.get('id')
  await connect()
  await Quiz.findByIdAndDelete({ _id: id })
  console.log('id by delete method: ', id)
  return NextResponse.json({ message: 'Quiz deleted' }, { status: 200 })
}
