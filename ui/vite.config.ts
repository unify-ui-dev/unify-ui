import UnoCSS from 'unocss/vite'
// import { resolve } from "path";
import { defineConfig } from 'vite'
// import { glob } from 'glob';

// function getInputs() {
//     const dirs = glob.sync('blocks/**/index.html');
//     const inputs = {
//         main: resolve(__dirname, 'index.html'),
//     };
//     for (const dir of dirs) {
//         const key = dir.slice(0, -'/index.html'.length);
//         inputs[key] = resolve(__dirname, dir);
//     }
//     return inputs;
// }

export default defineConfig({
    plugins: [
        UnoCSS(),
    ],
    build: {
        rollupOptions: {
            // input: getInputs(),
        },
    },
})