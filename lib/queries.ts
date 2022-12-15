export const blogPostsDoc = `
query BlogPosts($limit: Int!) {
    blogPostCollection(limit: $limit, order: date_DESC) {
        items {
            sys {
                id
                firstPublishedAt
            }
            title
            slug
            date
            excerpt
            content{
                json
            }
            ...imageUrl
            documentsCollection {
                items {
                    title
                    description
                    fileName
                    size
                    url
                }
            }
        }
    }
}
fragment imageUrl on BlogPost {
    image {
        url
        title
        width
        height
    }
}
`
export const blogPostBySlugDoc = `
query BlogPostBySlug($slug: String!, $preview: Boolean!) {
    blogPostCollection(where: {slug: $slug}, limit: 1, preview: $preview) {
        items {
            sys {
                id
                firstPublishedAt
            }
            title
            slug
            date
            excerpt
            content{
                json
            }
            ...imageUrl
            documentsCollection {
                items {
                    title
                    description
                    fileName
                    size
                    url
                }
            }
        }
    }
}
fragment imageUrl on BlogPost {
    image {
        url
        title
        width
        height
    }
}
`
export const allBlogPostsWithSlugDoc = `
query AllBlogPostsWithSlugs {
  blogPostCollection(
    where: { slug_exists: true }
    order: date_DESC
  ) {
    items {
      slug
    }
  }
}
`
