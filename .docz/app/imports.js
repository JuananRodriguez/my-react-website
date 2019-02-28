export const imports = {
  'elements/Button/buttons.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "elements-button-buttons" */ 'src/elements/Button/buttons.mdx'),
}
