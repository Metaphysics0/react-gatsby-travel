import React from "react"
import * as S from "./EmailStyles"
import { Button } from "../components/Button"

const Email = () => {
  return (
    <S.EmailContainer>
      <S.EmailContent>
        <h1>Get Access to Exclusive Offers</h1>
        <p>Sign up for your newsletter below to get $100 off your first trip</p>
        <form action="#">
          <S.FormWrap>
            <label htmlFor="email">
              <input type="email" placeholder="Enter your email" id="email" />
            </label>
            <Button
              as="button"
              type="submit"
              primary="true"
              round="true"
              css={`
                height: 48px;

                @media screen and (max-width: 768px) {
                  width: 100%;
                  min-width: 350px;
                }
                @media screen and (max-width: 400px) {
                  width: 100%;
                  min-width: 250px;
                }
              `}
            >
              Sign Up
            </Button>
          </S.FormWrap>
        </form>
      </S.EmailContent>
    </S.EmailContainer>
  )
}

export default Email
