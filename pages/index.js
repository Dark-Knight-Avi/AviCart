import dynamic from 'next/dynamic'
const Layout = dynamic(() => import('../components/Layout'))

export default function Home() {
  return (
    <Layout title="Home">
      This is Home page
    </Layout>
  )
}
