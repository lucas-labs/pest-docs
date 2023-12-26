import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import { LogoComponent } from './components/header-logo/header-logo';

const config: DocsThemeConfig = {
    logo: <LogoComponent />,

    project: {},
    docsRepositoryBase: 'https://lucaslabs.tech',
    footer: {
        
    },
    darkMode: true,
    primaryHue: 20,
    primarySaturation: 100,
    search: {},
    head: (
        <>
            {/* favico */}
            <link rel="shortcut icon" href="/logo.svg" />
        </>
    ),
    useNextSeoProps() {
        return {
            titleTemplate: '%s - ZGPT',
        };
    },
    toc: {
        backToTop: true,
    },
};

export default config;
