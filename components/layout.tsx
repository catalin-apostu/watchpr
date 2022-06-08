import { ReactElement } from 'react'
import { Nav } from 'components/nav'

export default function Layout({ preview, children }: { preview: boolean; children: ReactElement | ReactElement[] }) {
  return (
    <>
      <Nav />
      {children}
    </>
  )
}
