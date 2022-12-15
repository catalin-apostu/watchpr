import { Image, RichText } from './generic'

export interface BlogPost {
  sys: {
    id: string
    firstPublishedAt: string
  }
  title: string
  slug: string
  date: string
  excerpt: string
  content: RichText
  image: Image
  documentsCollection: {
    items: Image[]
  }
}
