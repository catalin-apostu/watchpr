import { GraphQLClient } from 'graphql-request'
import { blogPostsDoc, blogPostBySlugDoc, allBlogPostsWithSlugDoc } from 'lib/queries'

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const publicToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
const previewToken = process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN

export const swrFetcher = async (query: string) => {
  const endpoint = `https://graphql.contentful.com/content/v1/spaces/${space}`

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${publicToken}`,
    },
  })
  return await graphQLClient.request(query)
}
export const candidatesFetcher = async (query: string) => {
  const data = await swrFetcher(query)
  return await data.candidateCollection.items
}

export async function fetchGraphQL(
  query: string,
  operationName: string,
  variables?: { [key: string]: string | number | boolean },
  preview?: boolean
) {
  const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${space}`

  const accessToken = preview ? previewToken : publicToken

  const fetchOptions = {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + accessToken,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: query,
      variables: variables,
      operationName: operationName,
    }),
  }

  const fetchResult = await fetch(fetchUrl, fetchOptions)
  const json = await fetchResult.json()

  if (!!json.errors) {
    console.warn(
      `\nErrors in GraphQL query ${operationName}:`,
      json.errors.map((err: any) => err.message)
    )
  }

  return json
}

export async function getBlogPosts(limit: number, preview: boolean) {
  const entries = await fetchGraphQL(blogPostsDoc, 'BlogPosts', { limit }, preview)
  return extractBlogPosts(entries)
}

export async function getBlogPostBySlug(slug: string, limit: number, preview: boolean) {
  const entry = await fetchGraphQL(blogPostBySlugDoc, 'BlogPostBySlug', { slug, preview }, preview)
  return extractBlogPost(entry)
}

export async function getAllBlogPostsWithSlugs() {
  const entries = await fetchGraphQL(allBlogPostsWithSlugDoc, 'AllBlogPostsWithSlugs')
  return extractBlogPosts(entries)
}

function extractBlogPosts(fetchResponse: { data: any }) {
  return fetchResponse?.data?.blogPostCollection?.items || []
}

function extractBlogPost(fetchResponse: { data: any }) {
  return fetchResponse?.data?.blogPostCollection?.items?.[0] || null
}
