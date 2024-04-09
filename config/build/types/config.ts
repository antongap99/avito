export type BuildMode = 'development' | 'production'

export interface BuildPaths {
    entry: string, // entry point ts
    build: string, // path to dist dir
    html: string, // path to template
    src: string,
	env: string
}
export interface BuildOptions {
    mode: BuildMode,
    paths: BuildPaths
    isDev: boolean,
    port: number,
}

export interface BuildEnv {
    mode: BuildMode,
    port: number,
	BASE_URL: string
}
