
import React from "react"

const Walkthrough = () => {
  //const describing number of slides
    //rewrite this graphql query to fetch the next slide
        const data = useStaticQuery(graphql`
          query {
            placeholderImage: file(relativePath: { eq: ${gatsby-astronaut.png} }) {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `)
        //a next button 
        //a textfield
        //an onClick function
      
        return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      }

}

export default Walkthrough;