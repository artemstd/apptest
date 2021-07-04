import LinkNext from 'next/link';
import Logo from '../../atoms/icon/Logo';

const Header = () => {
    return <header className="flex justify-center">
        <LinkNext href="/">
            <a>
                <Logo />
            </a>
        </LinkNext>
    </header>;
};

export default Header;