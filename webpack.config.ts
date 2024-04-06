import path from 'path';
import webpack from 'webpack';
// eslint-disable-next-line import/no-unresolved
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
// eslint-disable-next-line import/no-unresolved
import { BuildEnv } from './config/build/types/config';

export default (env: BuildEnv) => {
    const mode: 'development' | 'production' = env.mode || 'development';

    const paths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'dist'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    };
    const port = env.port || 3000;
    const isDev = mode === 'development';

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port,
    });

    return config;
};
