import { FC, HTMLAttributes } from 'react';
import LinkNext from 'next/link';
import Logo from '../../atoms/icon/Logo';
import Link from '../../atoms/link/Link';

const Header: FC<HTMLAttributes<HTMLElement>> = () => {
    return <header className="flex justify-center">
        <LinkNext href="/" passHref>
            <Link>
                <Logo />
            </Link>
        </LinkNext>
    </header>;
};

export default Header;