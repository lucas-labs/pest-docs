import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import { LogoComponent } from './components/header-logo/header-logo';

const Footer =  () => (
    <div></div>
);

const config: DocsThemeConfig = {
    logo: <LogoComponent />,
    project: {
        link: 'https://github.com/lucas-labs/pest'
    },
    docsRepositoryBase: 'https://github.com/lucas-labs/pest-docs/tree/master/',
    footer: {
        component: <Footer/>,
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
    sidebar: {
        titleComponent({ title, type }) {
          if (type === 'separator') {
            return <span className="cursor-default">{title}</span>
          }
          return <>{title}</>
        },
        defaultMenuCollapseLevel: 3,
        toggleButton: true
    },
    editLink: {
        text: 'Edit this page on GitHub →'
    },
    feedback: {
        content: 'Question? Give us feedback →',
        labels: 'feedback'
    },
    toc: {
        backToTop: true,
    },
};

export default config;
