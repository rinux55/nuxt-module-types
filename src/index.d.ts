declare module 'nuxt/schema' {

  interface PublicRuntimeConfig {
    myModule: {
      myComplexType: false | { a : string}
    }
  }
}
