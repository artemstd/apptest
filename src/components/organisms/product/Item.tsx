import { FC, memo } from 'react';
import Image from 'next/image';
import LinkNext from 'next/link';
import Link from '../../atoms/link/Link';
import Heading from '../../atoms/typography/Heading';
import Paragraph from '../../atoms/typography/Paragraph';
import BlockGray from '../../wrapper/BlockGray';

interface IItem {
    id: number,
    image: string,
    name: string,
    shortDescription: string,
    description: string,
    price: number
};

interface IItemProps {
    product: IItem
};

const Item: FC<IItemProps> = ({ product }) => {
    return <BlockGray className="flex flex-col text-center px-10 py-6 sm:py-10">
        <Image src={`/img${product.image}`} width={514} height={394} />
        <Heading size={3} className="mt-8 text-3xl sm:text-4xl">{product.name}</Heading>
        <Paragraph className="mt-4 text-opacity-70 flex-1">{product.shortDescription}</Paragraph>
        <LinkNext href={`/products/${product.id}`} passHref>
            <Link isButtonStyle className="mx-auto mt-4 sm:mt-6">Buy ${product.price}</Link>
        </LinkNext>
    </BlockGray>;
};

export default memo(Item);

export type { IItem }