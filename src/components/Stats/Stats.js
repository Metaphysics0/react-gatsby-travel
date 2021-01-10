import React from "react"
import * as S from "./StatsStyles"
import { StatsData } from "../../data/StatsData"

const Stats = () => {
  return (
    <S.StatsContainer>
      <S.Heading>Why Choose Us?</S.Heading>
      <S.Wrapper>
        {StatsData.map((item, index) => {
          return (
            <S.StatsBox key={index}>
              <S.Icon>{item.icon}</S.Icon>
              <S.Title>{item.title}</S.Title>
              <S.Description>{item.desc}</S.Description>
            </S.StatsBox>
          )
        })}
      </S.Wrapper>
    </S.StatsContainer>
  )
}

export default Stats
