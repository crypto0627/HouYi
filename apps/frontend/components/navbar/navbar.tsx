'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export default function Navbar() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const update = () => {
      const now = new Date()
      const offsetMinutes = now.getTimezoneOffset()
      const offsetHours = -offsetMinutes / 60
      const offsetDisplay = offsetHours >= 0 ? `+${offsetHours}` : offsetHours
      const timeStr = now.toLocaleTimeString('en', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      })
      setTime(`${timeStr} GMT${offsetDisplay}`)
    }
    update()
    const timer = setInterval(update, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <nav className="flex w-full flex-nowrap items-center px-4 py-2.5 font-extralight text-gray-500/70 sm:px-4">
      <Link href="/" className="shrink-0 text-xl font-extrabold sm:text-2xl">
        HouYi
      </Link>

      <div className="ml-auto flex flex-nowrap items-center space-x-2 sm:space-x-4">
        <p className="text-xs whitespace-nowrap sm:text-sm">{time}</p>

        <Link
          href="/events"
          className="flex items-center space-x-1 text-sm font-medium whitespace-nowrap hover:text-gray-900 sm:text-sm"
        >
          <span>Explore events</span>
          <ArrowUpRight size={16} />
        </Link>

        <Link
          href="/signin"
          className="shrink-0 rounded-full bg-gray-500/10 px-2 py-1.5 text-xs font-medium whitespace-nowrap text-black hover:bg-black/50 hover:text-white sm:px-3 sm:text-sm"
        >
          Sign In
        </Link>
      </div>
    </nav>
  )
}
