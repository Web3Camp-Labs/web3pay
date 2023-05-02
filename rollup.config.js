import resolve from '@rollup/plugin-node-resolve';
import commonjs from "@rollup/plugin-commonjs";
import babel from '@rollup/plugin-babel'
import ts from 'rollup-plugin-typescript2'
import dts from "rollup-plugin-dts";
import path from 'path';
import json from "@rollup/plugin-json";
import copy from 'rollup-plugin-copy';

export default [{
    input: 'src/packages/index.ts',
    output: [
        {
            preserveModules: true,
            dir: 'dist/',
            format: 'es',
        },
    ],
    plugins: [
        resolve({
            extensions: ['.js', '.ts', '.jsx', '.tsx'],
            modulesOnly: true,
            preferBuiltins: false
        }),
        ts({
            tsconfig: path.resolve(__dirname, 'tsconfig.json')
        }),
        copy({
            targets: [
                {
                    src: 'src/packages/README.md',
                    dest: 'dist'
                }
            ]
        }),
        json(),
        commonjs(),
        babel({
            babelrc: false,
            babelHelpers: 'bundled' ,
            // plugins: [
            //     '@babel/transform-runtime'
            // ],
            exclude: 'node_modules/**',
            extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss'],
            presets: ['@babel/preset-env', '@babel/preset-react']
        }),
        // replace({
        //     'process.env.NODE_ENV': JSON.stringify( 'production' ),
        //     preventAssignment: true
        // })
    ],
    external: [
        'react',
        'react-dom',
        'ethers',
        'react/jsx-runtime',
    ],
},
    {
        input: 'src/packages/index.ts',
        output: [{ file: "dist/index.d.ts", format: "es" }],
        plugins: [dts()],
    },
];
