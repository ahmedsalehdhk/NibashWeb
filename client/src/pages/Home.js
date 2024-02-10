import React from 'react'

export default function Home() {
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center font-bold'>
      <h1 className='text-4xl mb-5'>Subscribe with your email. Free of cost!</h1>
      <form action="" className='flex gap-3'>
        <input type="email" placeholder='someone@something.com' className='border p-5 rounded' />
        <input type="submit" name="" value="Subscribe" className='py-5 px-10 bg-green-400' id="" />
      </form>
    </div>
  )
}
