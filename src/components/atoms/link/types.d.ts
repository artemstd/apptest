import { LinkHTMLAttributes } from 'react';

export interface ILinkProps extends LinkHTMLAttributes<HTMLAnchorElement> {
    isButtonStyle?: boolean
}