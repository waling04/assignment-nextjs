import mongoose from 'mongoose'

const quizSchema = new mongoose.Schema(
  {
    testId: {
      type: String,
      require: true,
      unique: true,
    },
    question: {
      type: String,
      require: true,
      unique: true,
    },
    choiceA: {
      type: String,
      require: true,
    },
    choiceB: {
      type: String,
      require: true,
    },
    choiceC: {
      type: String,
      require: true,
    },
    choiceD: {
      type: String,
      require: true,
    },
    answer: {
      type: String,
      require: true,
    },
  },
  { timestamps: true },
)

const Quiz = mongoose.models.quizzes || mongoose.model('quizzes', quizSchema)

export default Quiz
