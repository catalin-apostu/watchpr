import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import Layout from 'components/layout'
import { BlogTicks } from 'components/blog-ticks'
import { getBlogPosts } from 'lib/api'
import { BlogPost } from 'lib/contentTypes'

type Props = {
  blogPosts: BlogPost[]
  preview: boolean
}

const limit = 6

export default function IndexPage({ blogPosts, preview }: Props) {
  const router = useRouter()

  return (
    <Layout preview={preview}>
      {router.isFallback ? (
        <>Loading…</>
      ) : (
        <>
          <NextSeo
            title={`Noutăți - Watch PR`}
            description={`WATCH PR – Watchdog – Advocacy – Transparență – Corectitudine – Harta Politicii Românești`}
            canonical={`https://watchpr.ro`}
            openGraph={{
              url: `https://watchpr.ro`,
              title: `Noutăți - Watch PR`,
              description: `WATCH PR – Watchdog – Advocacy – Transparență – Corectitudine – Harta Politicii Românești`,
              images: blogPosts?.filter((blogPost) => blogPost.image != null).map((blogPost) => blogPost.image),
            }}
          />
          <BlogTicks blogPosts={blogPosts} />
        </>
      )}
    </Layout>
  )
}

export async function getStaticProps({ preview = false }: { preview: boolean }) {
  const blogPosts = await getBlogPosts(60, preview)

  return {
    props: {
      blogPosts,
      preview,
    },
  }
}
