import Image from 'next/legacy/image'
import Link from 'next/link'

import { BlogPost } from 'lib/contentTypes'

export function BlogPostCardBig({ blogPost }: { blogPost: BlogPost }) {
  return (
    <li className='card-big cursor-pointer'>
      <div className='space-y-4'>
        {blogPost.image != null && (
          <div className=''>
            <Link href={`/blog/${blogPost.slug}`} title={blogPost.title} legacyBehavior>
              <Image
                className='object-cover shadow-lg rounded-lg'
                src={blogPost.image.url}
                alt={blogPost.image.title}
                width={384}
                height={256}
                layout='responsive'
              />
            </Link>
          </div>
        )}
        <div className='text-lg leading-6 font-medium space-y-1'>
          <h3 className='candidate-detail'>
            <Link href={`/blog/${blogPost.slug}`} title={blogPost.title} legacyBehavior>
              {blogPost.title}
            </Link>
          </h3>
        </div>
        <div className='text-base max-w-prose mx-auto lg:max-w-none'>
          <strong className='text-lg text-gray-500'>{new Date(blogPost.date).toLocaleDateString('ro-RO')}</strong>
        </div>
        <div className='text-lg'>
          <p className='text-gray-500'>{blogPost.excerpt.substring(0, 180)}...</p>
        </div>
      </div>
    </li>
  )
}
