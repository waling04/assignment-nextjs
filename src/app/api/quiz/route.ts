// import { connect } from '@/app/dbConfig/dbConfig'
import { DBConnect } from '@/app/models/DBConnection'
import Quiz from '@/app/models/quiz'
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  await DBConnect()
  const quizzes = await Quiz.find()
  // console.log('quizzes:', quizzes)
  return NextResponse.json({ quizzes })
}

export async function POST(request: NextRequest) {
  const { testId, question, choiceA, choiceB, choiceC, choiceD, answer } =
    await request.json()
  await DBConnect()
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

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get('id')
  await DBConnect()
  await Quiz.findByIdAndDelete({ _id: id })
  console.log('id by delete method: ', id)
  return NextResponse.json({ message: 'Quiz deleted' }, { status: 200 })
}
