module.exports={
    entry:'./src/index.tsx',
    output:{filename:'4land.js', path:__dirname+ '/dist'},
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            
            //load css
             {
                 test:/\.css?$/,
                 use: [
                    'style-loader',
                    {
                      loader: 'typings-for-css-modules-loader',
                      options: {
                        modules: true,
                        namedExport: true
                      }
                    }
                  ]
             }
        ]
    }
}
