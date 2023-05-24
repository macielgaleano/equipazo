"use client"; 

import Image from 'next/image'
import React, { useState, useEffect } from 'react'

export default function Main() {
  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)
  const ref: React.RefObject<HTMLInputElement> = React.createRef();

  useEffect(() => {
    ref?.current?.clientHeight && setHeight(ref.current.clientHeight)
    ref?.current?.clientWidth && setWidth(ref.current.clientWidth)
  })


  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { clientX, clientY } = e
    const yRotation = ((clientX - width / 2) / width) *20
    const xRotation = ((clientY - height / 2) / height) *20
    const string = `perspective(500px) rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale(1.1)`
    if(ref?.current?.style) ref.current.style.transform = string
  }

  const handleMouseOut = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if(ref?.current?.style) ref.current.style.transform = 'perspective(500px) rotateX(0deg) rotateY(0deg) scale(1)'
  }

  return (
    <header className='header' ref={ref} onMouseMove={handleMouseMove} onMouseOut={handleMouseOut}>
      <div >
        <Image src="/equipazo_logo.png" alt="Equipazo logo" width={350} height={350} />
      </div>
      <div className='header__title'>
        <h1>Equipazo F.C</h1>
        <h2>El mejor equipo de la historia </h2>
        <p>Lorem ipsum dolor sit amet, <span>consectetur adipisicing elit.</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, aliquam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptas repellendus magni dignissimos quod officia reiciendis, odit deleniti beatae cupiditate!</p>
      </div>
    </header>
  )
}

