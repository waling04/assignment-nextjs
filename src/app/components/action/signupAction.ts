'use server'

import { DBConnect } from '@/app/models/DBConnection'
import User from '@/app/models/user'

export async function signupAction(formData: String) {
  await DBConnect()
  await User.create(formData)
  console.log('formData: ', formData)
}
