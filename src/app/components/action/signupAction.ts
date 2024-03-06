'use server'

import { connect } from '@/dbConfig/dbConfig'
import User from '@/models/user'

export async function signupAction(formData: any) {
  await connect()
  await User.create(formData)
  console.log('formData: ', formData)
}
