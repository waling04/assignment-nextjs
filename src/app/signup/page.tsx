'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { IoIosWarning } from 'react-icons/io'
import { signupAction } from '../components/action/signupAction'

function SignUp() {
  const [errorMessage, setErrorMessage] = useState(null)
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm()
  const router = useRouter()
  const onSubmit = async (data: any) => {
    await signupAction(data)
    router.push('/login')
    // console.log('Response: ', data)
  }
  return (
    <div className="max-w-sm mx-auto mt-20 bg-gray-800 rounded-lg min-h-[350px] p-10">
      {errorMessage && (
        <div className="bg-yellow-600 p-1 rounded-lg my-3 flex flex-row gap-3 pl-2 justify-center items-center">
          <span>
            <IoIosWarning />
          </span>
          <span>{errorMessage}</span>
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="flex flex-col gap-3 w-full">
          <label className="text-white">Username</label>
          <input
            type="text"
            {...register('username', { required: true })}
            className="p-1 outline-none border border-gray-100 rounded-lg"
          />
          {errors.username?.type === 'required' && (
            <p className="text-yellow-600">Username Required</p>
          )}
        </fieldset>
        <fieldset className="flex flex-col gap-3 w-full my-2">
          <label className="text-white">E-mail</label>
          <input
            type="email"
            {...register('email', { required: true })}
            className="p-1 outline-none border border-gray-100 rounded-lg"
          />
          {errors.email?.type === 'required' && (
            <p className="text-yellow-600">E-mail Required</p>
          )}
        </fieldset>
        <fieldset className="flex flex-col gap-3 w-full my-2">
          <label className="text-white">Password</label>
          <input
            type="password"
            {...register('password', { required: true })}
            className="p-1 outline-none border border-gray-100 rounded-lg"
          />
          {errors.password?.type === 'required' && (
            <p className="text-yellow-600">Password Required</p>
          )}
        </fieldset>
        <fieldset>
          <button
            type="submit"
            className="px-5 py-1 bg-blue-800 text-white rounded-lg mt-5"
          >
            Sign Up
          </button>
        </fieldset>
      </form>
    </div>
  )
}

export default SignUp
