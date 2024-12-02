import React from 'react'
import './Banner.css'

interface BannerProps {
  ImagemSrc: string
  ImagemAlt?: string
}

const Banner = ({ImagemSrc, ImagemAlt} :BannerProps) => {
  // JSX
  return (
    <header className="banner">
      {/* <img src="/imagens/banner.png" alt="O banner principal da página do Organo"/> */}
      <img src={ImagemSrc} alt={ImagemAlt}/>
    </header>
  )
}

export default Banner