import React from 'react'
import Layout from '../../components/Layout'
import {useRouter} from 'next/router'

const Product = ({ slag }) => {
    const router = useRouter()
    return (
        <Layout title={"Product"}>
            This is a product
        </Layout>
    )
}

export default Product