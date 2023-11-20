
import ImageSlider from './ImageSlider'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Numbers from './components/Numbers'
import Offerings from './components/Offerings'
import Solutions from './components/Solutions'
import WhatWeDo from './components/WhatWeDo'

export default function Home() {
  return (
    <main className='' >
      <Hero/>
      <WhatWeDo/>
      <Numbers/>
      <Offerings/>
      <Solutions/>
      <ImageSlider/>
     
    </main>
  )
}
