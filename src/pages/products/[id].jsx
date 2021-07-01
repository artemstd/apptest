import Image from 'next/image';
import ProductList from '../../components/organisms/product/List';
import Heading from '../../components/atoms/typography/Heading';
import Paragraph from '../../components/atoms/typography/Paragraph';
import BlockGray from '../../components/wrapper/BlockGray';
import OrderForm from '../../components/organisms/product/OrderForm';
import { fetchOne as fetchOneProduct } from '../../api/products';

const ProductPage = ({ product, relatedProducts }) => {
    return <>
        <BlockGray className="grid grid-cols-1 xl:grid-cols-2 py-10 md:py-20 mt-9">
            <div className="text-center">
                <Image src={`/img${product.image}`} width={800} height={588} layout="intrinsic" />
            </div>
            <div className="text-center lg:text-left pt-5 sm:pt-14 md:pt-28 px-2.5 mx-8 md:mx-16 lg:mx-32 xl:pl-0 xl:ml-0">
                <Heading size={1} className="text-2xl sm:text-7xl pt-3 pb-8">{product.name}</Heading>
                <Paragraph className="sm:text-2xl mb-8 sm:mb-16">{product.description}</Paragraph>
                <OrderForm productId={product.id} className="lg:w-2/3 xl:w-11/12" />
            </div>
        </BlockGray>
        <Heading size={2} className="mt-16 sm:mt-20 md:mt-24 mb-4 sm:mb-8 text-center sm:text-left">Related Figures</Heading>
        <ProductList products={relatedProducts} />
    </>;
};

ProductPage.defaultProps = {
    product: {},
    relatedProducts: []
};

export default ProductPage;

export async function getServerSideProps({ params }) {
    try {
        const resp = await fetchOneProduct(params.id);
        return {
            props: {
                pageTitle: `Buy "${resp.data.product.name}"`,
                ...resp.data
            }
        };
    } catch(exception) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        };
    }
};