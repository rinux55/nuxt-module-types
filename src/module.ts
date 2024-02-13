import { defineNuxtModule } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {
  someComplexType: false | {
    a: string
  }
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'my-module',
    configKey: 'myModule'
  },
  // Default configuration options of the Nuxt module
  defaults: () => ({
    someComplexType: {
      a: 'foo'
    }
  }),
  setup (options, nuxt) {
    // Module options
    options.someComplexType = false
    
    // Module runtime config
     nuxt.options.runtimeConfig.public.myModule = {
      myComplexType: false
     }
  }
})

// Here's the augmentation that makes it work
declare module '@nuxt/schema' {
  interface PublicRuntimeConfig {
    myModule: {
      myComplexType: false | { a : string}
    }
  }
}
