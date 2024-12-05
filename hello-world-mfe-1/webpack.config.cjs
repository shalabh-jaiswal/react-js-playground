const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode : 'development',
    devServer : {
        port : 3009,
        historyApiFallback : {
            index : '/index.html'
        },
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
      },
    plugins : [
        new HtmlWebpackPlugin({
            template : './index.html'
        }),
        new ModuleFederationPlugin({
            name : 'helloworld',
            filename : 'remoteEntry.js',
            exposes :
                {'./HelloWorld' : '/src/index'}
            }
        )
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx|ts)$/,
                loader: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    }
};


// {
//   "compilerOptions": {
//     "target": "ES2020",
//     "useDefineForClassFields": true,
//     "lib": ["ES2020", "DOM", "DOM.Iterable"],
//     "module": "ESNext",
//     "skipLibCheck": true,

//     /* Bundler mode */
//     "moduleResolution": "bundler",
//     "resolveJsonModule": true,
//     "isolatedModules": true,
//     "noEmit": false,
//     "jsx": "react-jsx",

//     /* Linting */
//     "strict": true,
//     "noUnusedLocals": true,
//     "noUnusedParameters": true,
//     "noFallthroughCasesInSwitch": true
//   },
//   "include": ["src"],
//   "references": [{ "path": "./tsconfig.node.json" }]
// }

