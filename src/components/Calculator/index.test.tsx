// import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
// import Calculator from '.';
// import { multiplyBy2, multiplyBy3 } from './utils';
// import userEvent from '@testing-library/user-event';

test('ユニットテストのサンプル', () => {
  // Arrange - 準備
  const v1 = 1;
  const v2 = 2;
  const expected = 3;

  // Act - 実行
  const result = v1 + v2;

  // Assert - 検証
  expect(result).toBe(expected);
})