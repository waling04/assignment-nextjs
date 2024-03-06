'use client'

import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { IoIosWarning } from 'react-icons/io'
import { loginAction } from '../components/action/loginAction'

const LoginPage = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm()
  const [errorMessage, setErrorMessage] = useState(null)

  const onSubmit = async (data: string) => {
    const res = await loginAction(data)
    setErrorMessage(res?.error)
    console.log('Response :', res)
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
            Login
          </button>
        </fieldset>
      </form>
      <div className="text-white flex justify-center items-center mt-8">
        haven't signup yet?{' '}
        <Link href="/signup" className="text-green-400 ml-2">
          signup
        </Link>
      </div>
    </div>
  )
}

export default LoginPage
