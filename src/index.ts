import { createPlugin } from 'docz-core'

export const reactNative = () =>
  createPlugin({
    setConfig: config => ({
      ...config,
      native: true,
    }),
    modifyBundlerConfig: config => {
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        'react-native$': `react-native-web`,
      }

      return config
    },
  })
