"use client"

import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const Forcerefreseher = () => {
  const router=useRouter()
  useEffect(() => {
    router.refresh()
  },[] )
  return<></>
  
}

export default Forcerefreseher