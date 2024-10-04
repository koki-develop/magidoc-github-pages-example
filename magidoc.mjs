export default {
  introspection: {
    type: "sdl",
    paths: ["./schema.docs.graphql"],
  },
  website: {
    template: "carbon-multi-page",
    options: {
      siteRoot: "/magidoc-github-pages-example",
      // Custom Scalar のサンプル値を指定
      queryGenerationFactories: {
        Base64String: "BASE64_STRING",
        BigInt: 100000000,
        Date: "2021-01-01",
        DateTime: "2021-01-01T00:00:00Z",
        GitObjectID: "GIT_OBJECT_ID",
        GitRefname: "refs/heads/master",
        GitSSHRemote: "GIT_SSH_REMOTE",
        GitTimestamp: "2021-01-01T00:00:00",
        HTML: "<p>HTML</p>",
        PreciseDateTime: "2021-01-01T00:00:00.000Z",
        URI: "https://example.com",
        X509Certificate: "X509_CERTIFICATE",
      },
    },
  },
};
