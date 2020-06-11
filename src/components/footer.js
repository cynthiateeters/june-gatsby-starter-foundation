import React from "react"
import { useStaticQuery, graphql } from "gatsby"
/* import { Link } from "gatsby" */
import { RiOpenArmLine, RiCopyrightLine } from "react-icons/ri"

const Footer = () => {
  const query = graphql`
    query FooterQuery {
      site {
        siteMetadata {
          siteTitle: title
          siteAuthor: author
        }
      }
    }
  `

  const { site } = useStaticQuery(query)
  const { siteTitle, siteAuthor } = site.siteMetadata

  return (
    <footer className="site-footer">
      <div className="container">
        <p>
          {siteTitle} <RiOpenArmLine /> Copyright <RiCopyrightLine />{" "}
          {siteAuthor} 2020
        </p>
      </div>
    </footer>
  )
}

export default Footer
