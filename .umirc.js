import { getConfig } from '@zstack-cmp/utils'

const options = {
  serverIP: '127.0.0.1',
  name: 'demo',
  base: '/demo',
  type: 'slave',
  workspaceFolder: __dirname
}

const umiConfig = {
  externals: false //仅demo适用，自己编写插件请去除本配置
}

const config = getConfig(options, umiConfig)

export default config