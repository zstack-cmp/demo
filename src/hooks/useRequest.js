import { useState, useEffect } from 'react'
import { request } from '@zstack-cmp/utils'

export default function(url, options) {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [total, setTotal] = useState(0)
  useEffect(() => {
    setLoading(true)
    request(`${__APPNAME__}/${url}`, options).then(
      res => {
        setData(res.data)
        setTotal(res.total)
        setLoading(false)
      },
      err => {
        console.log(err)
      }
    )
  }, [url, options])

  return {
    loading,
    data,
    total
  }
}
