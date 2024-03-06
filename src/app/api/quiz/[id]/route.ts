import { connect } from '@/dbConfig/dbConfig'
import Quiz from '@/models/quiz'
import { NextResponse } from 'next/server'

type PropsType = {
  params?: any
  json: any
}

export async function PUT(request: PropsType, { params }: PropsType) {
  const { id } = params
  const {
    newTestId: testId,
    newQuestion: question,
    newChoiceA: choiceA,
    newChoiceB: choiceB,
    newChoiceC: choiceC,
    newChoiceD: choiceD,
    newAnswer: answer,
  } = await request.json()
  await connect()
  await Quiz.findByIdAndUpdate(id, {
    testId,
    question,
    choiceA,
    choiceB,
    choiceC,
    choiceD,
    answer,
  })
  return NextResponse.json({ message: 'Quiz Updated' }, { status: 200 })
}

export async function GET(request: PropsType, { params }: PropsType) {
  const { id } = params
  await connect()
  const quiz = await Quiz.findOne({ _id: id })
  // console.log('first: ', quiz);
  return NextResponse.json({ quiz }, { status: 200 })
}
