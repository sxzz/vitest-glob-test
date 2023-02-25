/// <reference types="vite/client" />

import { test } from 'vitest'

test('basic', () => {
  const results = import.meta.glob('./*.txt', {
    as: 'raw',
    eager: true,
  })
  console.log(results)
})
