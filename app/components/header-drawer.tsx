'use client'

import { useState } from 'react'

export default function TopDrawer() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="text-center">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="overflow-y-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Show top drawer
      </button>

      {/* Drawer Component */}
      <div
        className={`fixed top-0 left-0 right-0 z-40 w-full p-4 transition-transform bg-white dark:bg-gray-800 ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <h5
          id="drawer-top-label"
          className="mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
        >
          Top drawer
        </h5>

        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          ✕
        </button>

        <p className="max-w-lg mb-6 text-sm text-gray-500 dark:text-gray-400">
          Supercharge your hiring by taking advantage of our{' '}
          <a
            href="#"
            className="text-blue-600 underline font-medium dark:text-blue-500 hover:no-underline"
          >
            limited-time sale
          </a>{' '}
          for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.
        </p>

        <a
          href="#"
          className="px-4 py-2 me-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Learn more
        </a>

        <a
          href="#"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Get access →
        </a>
      </div>
    </div>
  )
}
