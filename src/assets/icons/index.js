import { MultipleFilesLoader } from "@utils/ImportUtils"
  
const loader = new MultipleFilesLoader({

    path: `/src/assets/icons/`,

    rawFiles: import.meta.glob('/src/assets/icons/*.svg', {
        query: '?raw'
    }),

    urlFiles: import.meta.glob('/src/assets/icons/*.svg', {
        query: '?url'
    }),

    logs: false
});


export default loader;