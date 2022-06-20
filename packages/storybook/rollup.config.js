import Ts from 'rollup-plugin-typescript2'

export default {
    input: [
        'src/index.tsx',
        'src/atoms/Button/index.tsx',
        // 'src/atoms/Color/index.ts',
        // 'src/atoms/Margin/index.ts',
        // 'src/molecules/Select/index.ts',
    ],
    output: {
        dir: 'lib',
        format: 'esm',
        sourcemap: true
    },
    plugins: [Ts()],
    preserveModules: true,
    external: ['storybook']
}