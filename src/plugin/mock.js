import Mock from 'mockjs'
import { request } from '@/common/api'
// 测试数据
Object.keys(request).forEach(v => {
  const req = request[v]
  Mock.mock(req.url, req.method, req.data)
})
