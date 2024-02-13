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
  setup (options: ModuleOptions, nuxt) {
    // 'nuxt.options.runtimeConfig.public.myModule' is of type 'unknown'.ts(18046)
     nuxt.options.runtimeConfig.public.myModule.someComplexType = false
  }
})
