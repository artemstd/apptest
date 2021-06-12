import '../styles/globals.css';
import Layout from '../components/layouts/Default';

export default function App({ Component, pageProps = {} }) {
    const { pageTitle } = pageProps;
    return <Layout pageTitle={pageTitle}>
        <Component {...pageProps} />
    </Layout>
}