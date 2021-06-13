import Image from 'next/image';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductsList from '../../components/products/List';
import Button from '../../components/common/Button';
import { fetchOne as fetchOneProduct } from '../../api/products';
import { create as createPreOrder } from '../../api/pre-orders';

const validationSchema = yup.object().shape({
    email: yup.string().email('Invalid email adress').required('Required email')
});

export default function ProductPage({ product = {}, relatedProducts = [] }) {
    const handleSubmit = async (values, { setSubmitting, setErrors, resetForm }) => {
        try {
            const resp = await createPreOrder({
                ...values,
                productId: product.id
            });
            resetForm();
            toast.success(resp.data.message);
        } catch(exception) {
            if (exception.errors) {
                setErrors(exception.errors);
            } else {
                toast.error(exception.error || 'Error has occured');
            }
        }

        setSubmitting(false);
    };

    return <div className="mt-9">
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable={false}
            pauseOnHover={false}
            />
        <div className="grid grid-cols-1 xl:grid-cols-2 py-10 md:py-20 rounded-4xl bg-purple-100 bg-opacity-75">
            <div className="text-center">
                <Image src={product.image} width={800} height={588} layout="intrinsic" />
            </div>
            <div className="text-center lg:text-left pt-5 sm:pt-14 md:pt-28 px-2.5 mx-8 md:mx-16 lg:mx-32 xl:pl-0 xl:ml-0">
                <h1 className="text-3xl sm:text-6xl md:text-7xl pt-3 pb-8">{product.name}</h1>
                <p className="text-base-xs sm:text-2xl mb-8 sm:mb-16">{product.desc}</p>
                <Formik
                    initialValues={ {email: ''} }
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                    >
                    {({ isSubmitting, handleSubmit }) => (
                        <Form>
                            <div className="lg:w-2/3 xl:w-11/12 relative">
                                <Field type="email" name="email" className="sm:pr-72 w-full text-xs sm:text-2xl bg-white px-6 py-5 sm:px-8 sm:py-6 rounded-full border-2 border-gray-300" placeholder="Email" />
                                <div className="mt-1 sm:mt-0 sm:absolute inset-y-1.5 right-1.5">
                                    <Button className="w-full sm:w-auto" disabled={isSubmitting} onClick={handleSubmit}>Pre-order Now</Button>
                                </div>
                                <ErrorMessage className="text-red-500 mt-1 lg:ml-8" name="email" component="div" />
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
        <p className="text-bold text-3xl sm:text-6xl mt-16 sm:mt-20 md:mt-24 mb-4 sm:mb-8 text-center sm:text-left">Related Figures</p>
        <ProductsList products={relatedProducts} />
    </div>;
};

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