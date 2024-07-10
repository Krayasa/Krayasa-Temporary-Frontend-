const config = {
    staticDirs: ['../public'],
    stories: [
        '../stories/**/*.stories.(js|jsx|ts|tsx)', // Include .tsx files
        '../components/**/*.stories.(js|jsx|ts|tsx)', // Include .tsx files
        '../containers/**/*.stories.(js|jsx|ts|tsx)', // Include .tsx files
    ],
    babel: async (options) => {
        options.presets = ['next/babel'];
        return {
            ...options,
        };
    },
    addons: [
        '@storybook/addon-viewport',
        '@storybook/addon-a11y',
        '@storybook/addon-backgrounds',
    ],
    features: {
        babelModeV7: true,
    },
    docs: {
        autodocs: true,
        defaultName: 'Documentation',
    },
    framework: {
        name: '@storybook/nextjs',
        options: {},
    },
};

export default config;
