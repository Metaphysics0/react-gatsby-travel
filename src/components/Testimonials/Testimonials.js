import React from "react"
import * as S from "./TestimonailsStyles"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import { FaRegLightbulb } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"

const Testimonials = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          ext: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: { in: ["testimonial-1", "testimonial-2"] }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <S.TestimonialsContainer>
      <S.TopLine>Testimonials</S.TopLine>
      <S.Description>What People are Saying</S.Description>
      <S.ContentWrapper>
        <S.ColumnOne>
          <S.Testimonial>
            <IoMdCheckmarkCircleOutline
              css={`
                color: #3fffa8;
                font-size: 2rem;
                margin-bottom: 1rem;
              `}
            />
            <h3>Sean Michaels</h3>
            <p>
              "The greatest experience of my life! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Suscipit mollitia expedita rem?"
            </p>
          </S.Testimonial>
          <S.Testimonial>
            <FaRegLightbulb
              css={`
                color: #fab9ab;
                font-size: 2rem;
                margin-bottom: 1rem;
              `}
            />
            <h3>Sarah Kinn</h3>
            <p>
              "The greatest experience of my life! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Suscipit mollitia expedita rem?"
            </p>
          </S.Testimonial>
        </S.ColumnOne>
        <S.ColumnTwo>
          {data.allFile.edges.map((image, key) => (
            <S.Images key={key} fluid={image.node.childImageSharp.fluid} />
          ))}
          <S.Images />
        </S.ColumnTwo>
      </S.ContentWrapper>
    </S.TestimonialsContainer>
  )
}

export default Testimonials
