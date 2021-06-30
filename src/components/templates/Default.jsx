import Head from 'next/head';
import Header from '../organisms/header/Header';

const Default = ({ pageTitle, children }) => {
    return <>
        <Head>
            <title>{pageTitle}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no" />
        </Head>
        <Header />
        <main>
            {children}
        </main>
    </>;
};

Default.defaultProps = {
    pageTitle: ''
};

export default Default;