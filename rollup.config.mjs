import { createRequire } from "module";
const require = createRequire(import.meta.url);

import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import url from "@rollup/plugin-url";
import svgr from "@svgr/rollup";
import typescript from "rollup-plugin-typescript2";

const pkg = require("./package.json");

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: "es",
      exports: "named",
      sourcemap: true,
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    json(),
    resolve(),
    commonjs(),
    url({
      include: ["**/*.svg"],
      limit: 0,
      fileName: "[dirname][hash][extname]",
    }),
    svgr({
      svgo: false,
      titleProp: true,
    }),
    typescript({
      typescript: require("typescript"),
      useTsconfigDeclarationDir: true,
      tsconfigOverride: {
        compilerOptions: {
          declaration: true,
          declarationDir: "dist",
        },
      },
    }),
  ],
};
