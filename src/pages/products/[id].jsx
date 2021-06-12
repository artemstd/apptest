import { useCallback } from 'react';
import Image from 'next/image';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductsItem from '../../components/products/Item';
import { fetchOne as fetchOneProduct } from '../../api/products';
import { create as createPreOrder } from '../../api/pre-orders';

const validationSchema = yup.object().shape({
    email: yup.string().email('Invalid email adress').required('Required email')
});

export default function ProductPage({ product = {}, relatedProducts = [] }) {
    const handleSubmit = useCallback(async (values, { setSubmitting, setErrors, resetForm }) => {
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
    }, [product.id]);

    return <div>
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
        <div>
            <Image src={product.image} width={1022} height={783} />
        </div>
        <div>{product.name}</div>
        <div>{product.desc}</div>
        <Formik
            initialValues={ {email: ''} }
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            >
            {({ isSubmitting }) => (
                <Form>
                    <Field type="email" name="email" placeholder="Email" />
                    <button type="submit" disabled={isSubmitting}>Pre-order Now</button>
                    <ErrorMessage name="email" component="div" />
                </Form>
            )}
        </Formik>
        {
            relatedProducts.length
            && <div>
                {relatedProducts.map(item => (
                    <ProductsItem key={item.id} product={item} />)
                )}
            </div>
        }
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