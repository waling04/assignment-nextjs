import { DBConnect } from '@/app/models/DBConnection'
import Quiz from '@/app/models/quiz'
import { NextRequest, NextResponse } from 'next/server'

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
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
  await DBConnect()
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

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params
  await DBConnect()
  const quiz = await Quiz.findOne({ _id: id })
  // console.log('first: ', quiz);
  return NextResponse.json({ quiz }, { status: 200 })
}
