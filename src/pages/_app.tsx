import '../style.css';
import { FC } from 'react';
import { AppProps } from 'next/app';
import Template from '../components/templates/Default';

const App: FC<AppProps> = ({ Component, pageProps }) => {
    const { pageTitle } = pageProps;
    return <Template pageTitle={pageTitle}>
        <Component {...pageProps} />
    </Template>;
};

App.defaultProps = {
    pageProps: {}
};

export default App;