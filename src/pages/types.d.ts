import { AppProps } from 'next/app';
import { ITemplateProps } from '../components/templates/types';

export interface IBasePageProps extends ITemplateProps {
    queryData?: {
        [key: string]: any
    }
}

export interface IAppPageProps<P = {}> extends AppProps<P> {
    pageProps: P
}