import React from "react"
import Hero from "../components/Hero/Hero"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Stats from "../components/Stats/Stats"
import Testimonials from "../components/Testimonials/Testimonials"
import Trips from "../components/Trips/Trips"
import Email from "../Email/Email"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Trips heading="Our Favorite Destination" />
    <Testimonials />
    <Stats />
    <Email />
  </Layout>
)

export default IndexPage
