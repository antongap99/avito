import MiniCssExtractPlugin from 'mini-css-extract-plugin';

interface BuildCssLoaderOptions {
    isDev: boolean
}
export default ({ isDev }:BuildCssLoaderOptions) => ({
    test: /\.s[ac]ss$/i,
    use: [
        // Creates `style` nodes from JS strings
        MiniCssExtractPlugin.loader, // заменяем style-loader
        // Translates CSS into CommonJS
        {
            loader: 'css-loader',
            options: {
                modules: {
                    auto: (resPath: string) => Boolean(/\.module\./.test(resPath)),
                    localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
                }, // использование style.module.css
            },
        },
        // Compiles Sass to CSS
        {
            loader: 'sass-loader',
            options: {
                sourceMap: true,
            },
        },
    ],
});
