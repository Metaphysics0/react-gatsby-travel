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

// const Nav = styled.nav`
//   background: transparent;
//   height: 80px;
//   display: flex;
//   justify-content: space-between;
//   padding: 0.5rem calc((100vh - 1300px) / 2);
//   z-index: 100;
//   position: relative;
// `

// const NavLink = styled(Link)`
//   color: #fff;
//   display: flex;
//   align-items: center;
//   text-decoration: none;
//   padding: 0 1rem;
//   height: 100%;
//   cursor: pointer;
// `
// const Bars = styled(FaBars)`
//   display: none;
//   color: #fff;

//   @media screen and (max-width: 768px) {
//     display: block;
//     position: absolute;
//     top: 0;
//     right: 0;
//     transform: translate(-100%, 75%);
//     font-size: 1.8rem;
//   }
// `

// const NavMenu = styled.div`
//   display: flex;
//   align-items: center;
//   margin-right: -48px;

//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `

// const NavBtn = styled.div`
//   display: flex;
//   align-items: center;
//   margin-right: 24px;

//   @media screen and (max-iwdth: 768px) {
//     display: none;
//   }
// `
