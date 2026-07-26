import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '1jmyyjqm',
    dataset: 'production'
  },
  deployment: {
    appId: 'uq0pxb3mlv8rs5fp2uei01bl',
    autoUpdates: true
  }
})
