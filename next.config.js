module.exports = async () => {
    const nextra = (await import('nextra')).default;

    const withNextra = nextra({
        theme: 'nextra-theme-docs',
        themeConfig: './theme.config.tsx',
        staticImage: true,
        defaultShowCopyCode: true,
        latex: true,
    });

    return withNextra({
        output: 'export',
        images: {
            unoptimized: true,
        },
        webpack(config) {
            config.module.rules.push({
                test: /\.svg$/i,
                use: [
                    {
                        loader: '@svgr/webpack',
                        options: {},
                    },
                ],
            });

            return config;
        },
    });
};
