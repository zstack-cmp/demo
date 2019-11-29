import React, { PureComponent } from 'react'
import { Layout } from '@zstack-cmp/components'

const menuList = [
  {
    name: '平台概览',
    key: 'overview',
    icon: 'navi_icon_home',
    admin: true
  },
  {
    name: '云资源池',
    isGroup: true,
    children: [
      {
        name: '云主机',
        key: 'vm',
        icon: 'navi_icon_vm'
      },
      {
        name: '云盘',
        key: 'volume',
        icon: 'navi_icon_disk'
      },
      {
        name: '安全组',
        key: 'securityGroup',
        icon: 'navi_icon_security_group'
      }
    ]
  }
]

export default class extends PureComponent {
  render() {
    const { children } = this.props

    return (
      <Layout
        base="/demo/"
        icon="navi_product_region"
        title="demo"
        menuList={menuList}>
        {children}
      </Layout>
    )
  }
}
