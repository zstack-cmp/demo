import React, { useState } from 'react'
import { Table } from 'antd'
import immer from 'immer'
import useRequest from 'hooks/useRequest'
import Action from './Action'
import { Page } from '@zstack-cmp/components'

const { List } = Page

export default function VM(props, ref) {
  const [params, setParams] = useState({
    pageNum: 1,
    pageSize: 10,
    replyWithCount: true
  })
  const [selectedRowkeys, setSelectedRowkeys] = useState([])

  const { loading, data, total } = useRequest('vm-instances', params)

  const columns = [
    {
      title: '名称',
      dataIndex: 'name',
      sorter: true
    },
    {
      title: '状态',
      dataIndex: 'state'
    },
    {
      title: '操作',
      render: item => {
        return <Action item={item} />
      }
    }
  ]

  const rowSelection = {
    selectedRowkeys,
    onChange(selectedRowkeys, selectedRows) {
      setSelectedRowkeys(selectedRowkeys)
      props.onChange(selectedRows)
    }
  }

  return (
    <List
      title="云主机"
      loading={loading}
      dataSource={data}
      total={total}
      rowKey="id"
      rowSelection={rowSelection}
      columns={columns}
    />
  )
}
