import Layout from 'components/layout'

export default function IndexPage({ preview }: { preview: boolean }) {
  return (
    <Layout preview={preview}>
      <div className='bg-white'>
        <div className='flex justify-center mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24'>
          <iframe
            src='https://docs.google.com/forms/d/e/1FAIpQLSc5Nh-PcJ9VMKB06NyNABq4H4OzK3-j-FFPmaQvyqyvZEfI1Q/viewform?embedded=true'
            width='640'
            height='4046'
            frameBorder='0'>
            Loading…
          </iframe>
        </div>
      </div>
    </Layout>
  )
}
