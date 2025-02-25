import Link from 'next/link'
import React from 'react'

export default function ContactIndex() {
  return (
    <div className="text-center py-12 bg-pink-100">
      <h2 className="text-2xl font-semibold text-pink-700 mb-6">Pruébalo por ti misma, hoy.</h2>
      
      <Link href="/contacto"
        className="inline-block px-6 py-2 border-2 border-pink-700 text-pink-700 font-semibold hover:bg-pink-700 hover:text-white transition duration-300"
      >
        Contáctame
      </Link>
    </div>
  )
}