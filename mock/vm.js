import mockjs from 'mockjs'

export default {
  'GET /api/demo/vm-instances': mockjs.mock({
    'data|100': [
      {
        'id|+1': 1,
        name: /vm\d{3}/,
        state: /运行中|已停止|已暂停|已删除/
      }
    ],
    total: 100
  })
}
