const fs = require("fs");
const CracoAlias = require("craco-alias");
const ESLintPlugin = require('eslint-webpack-plugin');
const { ESLINT_MODES } = require('@craco/craco');

module.exports = {
    eslint: {
        mode: ESLINT_MODES.extends,
        configure: () => {
            // Workaround for broken ESLINT_MODES.file mode
            return require('./.eslintrc.js')
        }
    },
    plugins: [
        {
            plugin: CracoAlias,
            options: {
                source: "tsconfig",
                // baseUrl SHOULD be specified
                // plugin does not take it from tsconfig
                baseUrl: "./src",
                /* tsConfigPath should point to the file where "baseUrl" and "paths" 
             are specified*/
                tsConfigPath: "./tsconfig.paths.json",
            },
        },
        {
            plugin: {
                overrideCracoConfig: ({ cracoConfig }) => {
                    if (typeof cracoConfig.eslint.enable !== 'undefined') {
                        cracoConfig.disableEslint = !cracoConfig.eslint.enable;
                    }
                    delete cracoConfig.eslint;
                    return cracoConfig;
                },
                overrideWebpackConfig: ({ webpackConfig, cracoConfig }) => {
                    if (
                        typeof cracoConfig.disableEslint !== 'undefined' &&
                        cracoConfig.disableEslint === true
                    ) {
                        webpackConfig.plugins = webpackConfig.plugins.filter(
                            (instance) => instance.constructor.name !== 'ESLintWebpackPlugin',
                        );
                    }
                    webpackConfig.plugins = webpackConfig.plugins.filter(
                        (plugin) => !(plugin.options && 'eslintPath' in plugin.options)
                    );

                    webpackConfig.plugins.unshift(new ESLintPlugin({
                        // Plugin options
                        extensions: ['js', 'mjs', 'jsx', 'ts', 'tsx'],
                        formatter: require.resolve('react-dev-utils/eslintFormatter'),
                        eslintPath: require.resolve('eslint'),
                        context: './src',
                        cache: true,
                        // Setting threads to false boost compiling speed back to previous levels
                        threads: false,
                        // ESLint class options
                        cwd: fs.realpathSync(process.cwd()),
                        resolvePluginsRelativeTo: __dirname,
                        baseConfig: {
                            extends: [require.resolve('eslint-config-react-app/base')],
                            rules: {
                                'react/react-in-jsx-scope': 'error',
                            },
                        },
                    }));

                    return webpackConfig;
                },
            },
        },
    ],
};
