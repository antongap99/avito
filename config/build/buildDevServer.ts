import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export const buildDevServer = (options: BuildOptions): DevServerConfiguration => ({
    port: options.port,
    open: options.isDev,
    historyApiFallback: true,
    hot: true,
});
