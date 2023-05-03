import React, { ReactNode } from 'react';

export interface NavigationLinkProps {
    to: string;
    children: ReactNode;
}

export interface IProps {
    m1: string;
    m2: string;
}

export interface IPropsExtended extends IProps {
    message?: string;
}