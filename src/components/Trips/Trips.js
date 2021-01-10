import React from "react"
import * as S from "./TripsStyles"
import { useStaticQuery, graphql } from "gatsby"
import { Button } from "../Button"
import { ImLocation } from "react-icons/im"

const Trips = ({ heading }) => {
  const data = useStaticQuery(graphql`
    query TripsQuery {
      allTripsJson {
        edges {
          node {
            alt
            button
            name
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  function getTrips(data) {
    const tripsArray = []
    data.allTripsJson.edges.forEach((item, index) => {
      tripsArray.push(
        <S.ProductCard key={index}>
          <S.ProductImg
            src={item.node.img.childImageSharp.fluid}
            alt={item.node.alt}
            fluid={item.node.img.childImageSharp.fluid}
          />
          <S.ProductInfo>
            <S.TextWrap>
              <ImLocation />
              <S.ProductTitle>{item.node.name}</S.ProductTitle>
            </S.TextWrap>
            <Button
              to="/trips"
              primary="true"
              round="true"
              css={`
                position: absolute;
                top: 420px;
                font-size: 14px;
              `}
            >
              {item.node.button}
            </Button>
          </S.ProductInfo>
        </S.ProductCard>
      )
    })
    return tripsArray
  }

  return (
    <S.ProductsContainer>
      <S.ProductsHeading>{heading}</S.ProductsHeading>
      <S.ProductsWrapper>{getTrips(data)}</S.ProductsWrapper>
    </S.ProductsContainer>
  )
}

export default Trips
