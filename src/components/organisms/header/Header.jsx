import Link from 'next/link';
import Logo from '../../atoms/icon/Logo';

const Header = () => {
    return <header className="flex justify-center">
        <Link href="/">
            <a>
                <Logo />
            </a>
        </Link>
    </header>;
};

export default Header;