import Hero from '@/components/Hero'
import Products from '@/components/Products'
import Slides from '@/components/Slides'
import SubHero from '@/components/SubHero'
import React from 'react'

const page = () => {
  return (
    <div>
      < Hero />
      < SubHero />
      < Products />
      < Slides />
    </div>
  )
}

export default page