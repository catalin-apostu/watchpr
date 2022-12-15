import { BlogPost } from 'lib/contentTypes'
import { BlogPostCardBig } from 'components/blog-post-card-big'

export function BlogTicks({ blogPosts }: { blogPosts: BlogPost[] }) {
  return (
    <div className='bg-white'>
      <div className='mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24'>
        <div className='space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0'>
          <div className='lg:col-span-3'>
            <ul className='space-y-12 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8'>
              {blogPosts.map((blogPost) => (
                <BlogPostCardBig blogPost={blogPost} key={blogPost.sys.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
