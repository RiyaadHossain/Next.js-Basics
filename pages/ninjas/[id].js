import Head from 'next/head'
import styles from '../../styles/Ninjas.module.css'
import { useRouter } from 'next/dist/client/router';

export const getStaticPaths = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    const paths = data.map(ninja => {
        return { params: { id: ninja.id.toString() } }
    })

    return {
        paths, /*______ paths: [{params: {id: '1'}}, {params: {id: '2'}}, {params: {id: '3'}}] ______*/
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const data = await res.json()

    return {
        props: { ninja: data }
    }
}

function NinjaDetails({ ninja }) {
    const router = useRouter()
    return (
        <>
            <Head>
                <title>Ninja Listing | {ninja.name}</title>
            </Head>
            <div>
                <h1>{ninja.name}</h1>
                <p>{ninja.email}</p>
                <p>{ninja.website}</p>
                <p>{ninja.address.city}</p>
            </div>
            <a className={styles.btn} onClick={() => router.back()}>👈 Go Back</a>
        </>
    )
}

export default NinjaDetails
