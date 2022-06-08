import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { Transition } from '@headlessui/react'

export function Nav() {
  const router = useRouter()
  const activeRoute = router.pathname
  const [show, setShow] = useState('')
  const [showNav, setShowNav] = useState(false)
  useEffect(() => {
    setShow('')
  }, [activeRoute])
  return (
    <>
      <Head>
        <link rel='preconnect' href='https://ipumisoovm-dsn.algolia.net' crossOrigin='true' />
      </Head>
      <div className='sticky top-0 z-10 bg-white shadow-sm dark:bg-gray-800'>
        <div className='flex shadow-md justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10'>
          <div className='flex justify-start lg:w-0 lg:flex-1'>
            <Link href='/' passHref>
              <h1 className='text-3xl tracking-tight font-extrabold dark:text-white text-gray-900 sm:text-3xl md:text-3xl cursor-pointer'>
                <Image src={`/images/profile.png`} height={65} width={65} alt={'logo'} />
              </h1>
            </Link>
          </div>
          <div className='-mr-2 -my-2 md:hidden'>
            <button
              type='button'
              onClick={() => setShowNav(true)}
              className='bg-white dark:bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 dark:text-white dark:hover:text-gray-100 hover:text-gray-500 dark:hover:bg-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-100'
            >
              <span className='sr-only'>Open menu</span>
              <svg
                className='h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
              </svg>
            </button>
          </div>
          <nav className='hidden md:flex space-x-10'>
            <Link href='/' passHref>
              <span
                className={`text-base cursor-pointer font-medium ${
                  activeRoute === '/' ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-200'
                } hover:text-gray-900 dark:hover:text-gray-100`}
              >
                Raport
              </span>
            </Link>
            <Link href='/join' passHref>
              <span
                className={`text-base cursor-pointer font-medium ${
                  activeRoute === '/join' ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-200'
                } hover:text-gray-900 dark:hover:text-gray-100`}
              >
                Alătură-te
              </span>
            </Link>
          </nav>
          <div className={`hidden md:flex items-center justify-end md:flex-1 md:w-0`}>
            {/* <Search /> */}
          </div>
        </div>
        <Transition
          show={showNav}
          enter='duration-200 ease-out'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='duration-100 ease-in'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <div className='absolute z-10 top-0 h-screen inset-x-0 p-2 transition transform origin-top-right md:hidden'>
            <div className='rounded-lg shadow-xl h-full ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50'>
              <div className='pt-5 pb-6 px-5'>
                <div className={`${showNav ? '' : 'hidden'} md:flex items-center justify-end md:flex-1 lg:w-0`}>
                  {/* <Search /> */}
                </div>
              </div>
              <div className='py-6 px-5'>
                <div className='grid grid-cols-4 gap-4 justify-items-center'>
                  <Link href='/' passHref>
                    <a className='text-base font-medium text-gray-500 hover:text-gray-900'>Raport</a>
                  </Link>
                  <Link href='/join' passHref>
                    <a className='text-base font-medium text-gray-500 hover:text-gray-900'>Alătură-te</a>
                  </Link>
                </div>
              </div>
              <div className='pt-5 pb-6 px-5'>
                <div className='ml-auto'>
                  <button
                    type='button'
                    onClick={() => setShowNav(false)}
                    className='w-full flex mt-12 items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10'
                  >
                    {/*Heroicon name: x */}
                    <svg
                      className='h-6 w-6'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      aria-hidden='true'
                    >
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
                    </svg>
                    <span className='pl-4'>Închide meniul</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </>
  )
}
