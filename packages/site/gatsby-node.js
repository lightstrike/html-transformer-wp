const { HTMLFieldFromString } = require(`gatsby-transformer-html`)

exports.sourceNodes = ({ actions, schema }) => {

}

exports.createResolvers = ({ createResolvers }) => {
  createResolvers({
    WPGraphQL_Post: {
      content: HTMLFieldFromString
    }
  })
}