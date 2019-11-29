import React from 'react'
import { Dropdown, Button, Icon, Menu } from 'antd'

export default function Action({ item, changeItem }) {
  const doAction = (item, action) => {
    switch (action) {
      case 'start': {
        // do something
        break
      }
      case 'stop': {
        // do something
        break
      }
      case 'pause': {
        // do something
        break
      }
      case 'resume': {
        // do something
        break
      }
    }
  }

  const actionMenu = (
    <Menu>
      <Menu.Item
        key="start"
        onClick={() => doAction(item, 'start')}
        disabled={['Running', 'Paused'].indexOf(item.state) >= 0}>
        启动
      </Menu.Item>
      <Menu.Item
        key="stop"
        onClick={() => doAction(item, 'stop')}
        disabled={['Stopped'].indexOf(item.state) >= 0}>
        停止
      </Menu.Item>
      <Menu.Item
        key="pause"
        onClick={() => doAction(item, 'pause')}
        disabled={['Stopped', 'Paused'].indexOf(item.state) >= 0}>
        暂停
      </Menu.Item>
      <Menu.Item
        key="resume"
        onClick={() => doAction(item, 'resume')}
        disabled={['Running', 'Stopped'].indexOf(item.state) >= 0}>
        恢复
      </Menu.Item>
    </Menu>
  )

  return (
    <Dropdown overlay={actionMenu}>
      <Button>
        更多
        <Icon type="down" />
      </Button>
    </Dropdown>
  )
}
