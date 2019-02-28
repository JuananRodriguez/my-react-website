export default {
    title: 'my-react-website',
    description: 'Components Documentation',
    theme: 'docz-theme-default',
    themeConfig: {
        mode: 'light', //Can be dark
        logo: {
            src: 'https://www.juananrodriguez.es/wp-content/uploads/logo-home-juanan-rodriguez.png', //TODO conseguir que se trague una imagen local
            width: 200
        },
        colors: {
            primary: 'orange',
        },
    },
    modifyBundlerConfig: (config) => {
        config.resolve.extensions.push('.css');
        config.module.rules.push({
            test: /\.css$/i,
            use: ["style-loader", "css-loader"]
        });

        return config
    }
   // plugins: [
   //     myCoolPlugin()
   // ]
}
