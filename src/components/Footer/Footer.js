import React from "react"
import * as S from "./FooterStyles"

const Footer = () => {
  return (
    <S.FooterContainer>
      <S.FooterLinksWrapper>
        <S.FooterDesc>
          <h1>Explorix</h1>
          <p>We strive to create the best experiences for our customers</p>
        </S.FooterDesc>
        <S.FooterLinkItems>
          <S.FooterLinkTitle>Contact Us</S.FooterLinkTitle>
          <S.FooterLink to="/about">Contact</S.FooterLink>
          <S.FooterLink to="/about">Support</S.FooterLink>
          <S.FooterLink to="/about">Destinations</S.FooterLink>
          <S.FooterLink to="/about">Sponsorships</S.FooterLink>
        </S.FooterLinkItems>
      </S.FooterLinksWrapper>
      <S.FooterLinksWrapper>
        <S.FooterLinkItems>
          <S.FooterLinkTitle>Videos</S.FooterLinkTitle>
          <S.FooterLink to="/">Submit Videos</S.FooterLink>
          <S.FooterLink to="/">Ambassadors</S.FooterLink>
          <S.FooterLink to="/">Agency</S.FooterLink>
          <S.FooterLink to="/">Influencer</S.FooterLink>
        </S.FooterLinkItems>
        <S.FooterLinkItems>
          <S.FooterLinkTitle>Social Media</S.FooterLinkTitle>
          <S.FooterLink to="/">Contact</S.FooterLink>
          <S.FooterLink to="/">Support</S.FooterLink>
          <S.FooterLink to="/">Destinations</S.FooterLink>
          <S.FooterLink to="/">Sponsorships</S.FooterLink>
        </S.FooterLinkItems>
      </S.FooterLinksWrapper>
    </S.FooterContainer>
  )
}

export default Footer
