export const imports = {
  'src/elements/Button/buttons.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-elements-button-buttons" */ 'src/elements/Button/buttons.mdx'),
}
