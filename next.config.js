const { remarkCodeHike } = require("@code-hike/mdx");
const theme = require("shiki/themes/dracula.json");

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      [remarkCodeHike, { theme, lineNumbers: true, showCopyButton: true }],
    ],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    providerImportSource: "@mdx-js/react",
  },
});

module.exports = withMDX(
  {
    // Append the default value with md extensions
    pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
    module: {
      // …
      rules: [
        // …
        {
          test: /\.mdx?$/,
          use: [
            {
              loader: "@mdx-js/loader",
              /** @type {import('@mdx-js/loader').Options} */
              options: {},
            },
          ],
        },
      ],
    },
  },
  {
    // distDir: "/pages/posts",
    reactStrictMode: true,
    compiler: {
      styledComponents: true,
    },
  }
);
