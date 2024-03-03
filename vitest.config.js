import { getViteConfig } from 'astro/config';
import { resolve } from "node:path";

export default getViteConfig({
    test: {
        
    },
	resolve: {
		alias: [
			{ find: "@utils", replacement: resolve(__dirname, "./src/utils") }
		]
	}
});