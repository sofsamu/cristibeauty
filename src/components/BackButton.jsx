import React from 'react'
import Link from 'next/link'

export default function BackButton() {
  return (
    <div className="flex justify-center mt-8">
      <button>
        <Link href="/servicios">
          <span className="inline-block px-6 py-2 border-2 border-pink-700 text-pink-700 font-semibold hover:bg-pink-700 hover:text-white transition duration-300">
            Volver a Servicios
          </span>
        </Link>
      </button>
    </div>
  )
}