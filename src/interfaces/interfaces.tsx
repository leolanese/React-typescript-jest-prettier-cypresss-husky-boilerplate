import React, { ReactNode } from 'react';

export interface NavigationLinkProps {
    to: string;
    children: ReactNode;
}

export interface IProps {
    foo: string;
    bar: string;
}

export interface IPropsExtended extends IProps {
    message?: string;
}