import Link from 'next/link'
import React from 'react'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { RiInstagramFill } from 'react-icons/ri'

export default function Socialmedias() {
  return (
    <div>
       <div className="flex items-center space-x-2">
              <Link href="/">
                <RiInstagramFill className="text-2xl" />
              </Link>
              <Link href="/">
                <FaFacebookSquare className="text-2xl" />
              </Link>
              <Link href="/">
                <FaSquareXTwitter className="text-2xl" />
              </Link>
            </div>
    </div>
  )
}
