import React from "react"
import * as S from "./HeaderStyles"
import { menuData } from "../../data/MenuData"
import { Button } from "../Button"

const Header = () => {
  return (
    <S.Nav>
      <S.NavLink to="/">EXPLORIX</S.NavLink>
      <S.Bars />
      <S.NavMenu>
        {menuData.map((item, index) => (
          <S.NavLink to={item.link} key={index}>
            {item.title}
          </S.NavLink>
        ))}
      </S.NavMenu>
      <S.NavBtn>
        <Button primary="true" round="true" to="/trips">
          Book a flight
        </Button>
      </S.NavBtn>
    </S.Nav>
  )
}

export default Header
