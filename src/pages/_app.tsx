import '../style.css';
import { AppProps } from 'next/app';
import Template from '../components/templates/Default';
import { NextPage } from 'next';

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
    const { pageTitle } = pageProps;
    return <Template pageTitle={pageTitle}>
        <Component {...pageProps} />
    </Template>;
};

App.defaultProps = {
    pageProps: {}
};

export default App;