import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import path from "node:path";

const projectDir = dirname(fileURLToPath(import.meta.url));
const outputDir = path.join(projectDir, "dist");

export default {
  bail: true,
  context: projectDir,
  entry: path.resolve(projectDir, "./src/index.ts"),
  output: {
    filename: "lib/index.js",
    path: outputDir,
    library: {
      type: "module",
    },
  },
  experiments: {
    outputModule: true,
  },
  mode: "production",
  resolve: {
    extensions: [".js", ".json", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: [/node_modules/, /dist/],
        loader: "builtin:swc-loader",
        options: {
          jsc: {
            parser: {
              syntax: "typescript",
              tsx: true,
            },
            transform: {
              react: {
                runtime: "automatic",
              },
            },
          },
        },
        type: "javascript/auto",
      },
    ],
  },
};
