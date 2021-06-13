import { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../common/Button';

export default memo(function Item({ product = {} }) {
    return <div className="flex flex-col rounded-4xl bg-purple-100 bg-opacity-75 text-center px-10 py-6 sm:py-10">
        <Image src={product.image} width={514} height={394} />
        <p className="mt-8 font-bold text-black text-opacity-85 text-3xl sm:text-4xl">{product.name}</p>
        <p className="mt-4 text-black text-opacity-70 flex-1">{product.shortDesc}</p>
        <p className="mt-4 sm:mt-6">
            <Link href={`/products/${product.id}`} passHref>
                <Button>Buy ${product.price}</Button>
            </Link>
        </p>
    </div>;
})