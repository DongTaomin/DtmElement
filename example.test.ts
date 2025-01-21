// 测试文件
import { expect, test } from 'vitest'
test('test1 common matcher', () => {
  const name = 'zhangsan'
  expect(name).toBe('zhangsan')
  expect(2 + 2).toBe(4)
  expect(2 + 2).not.toBe(7)
})
test('test2 common matcher', () => {
  expect(1).toBeTruthy()
})
test('test3 common matcher', () => {
  expect(2 + 2).toBeGreaterThan(2)
})
