import '../style.css';
import Template from '../components/templates/Default';

const App = ({ Component, pageProps }) => {
    const { pageTitle } = pageProps;
    return <Template pageTitle={pageTitle}>
        <Component {...pageProps} />
    </Template>;
};

App.defaultProps = {
    pageProps: {}
};

export default App;