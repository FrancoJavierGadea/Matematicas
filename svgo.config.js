import crypto from "node:crypto";

export default {
    plugins: [
      {
        name: "prefixIds",
        params: {
          delim: "__",
          prefixIds: true,
          prefixClassNames: false,
          prefix: () => crypto.randomBytes(4).toString('hex')
        }
      }
    ]
}