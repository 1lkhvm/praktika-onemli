import React from 'react'
import Section1 from '../../Components/Section1'
import Section2Card from '../../Components/Section2Card'
import Navbar from '../../Layouts/Navbar'

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Section1></Section1>
      <Section2Card></Section2Card>
    </>

  )
}

export default Home