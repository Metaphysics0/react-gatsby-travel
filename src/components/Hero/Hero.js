import React from "react"
import * as S from "./HeroStyles"
import { Button } from "../Button"
import Video from "../../assets/videos/travel.mp4"

const Hero = () => {
  return (
    <S.HeroContainer>
      <S.HeroBg>
        <S.VideoBg
          src={Video}
          type="video/mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </S.HeroBg>
      <S.HeroContent>
        <S.HeroItems>
          <S.HeroH1>Unreal Destinations</S.HeroH1>
          <S.HeroP>Out of this world</S.HeroP>
          <Button primary="true" big="true" round="true" to="/trips">
            Travel Now
          </Button>
        </S.HeroItems>
      </S.HeroContent>
    </S.HeroContainer>
  )
}

export default Hero
