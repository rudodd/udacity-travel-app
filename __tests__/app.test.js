// Tests
import { notEmpty } from '../src/client/js/helpers'

const testField = document.createElement('input');
test('checks if field is empty', () => {
  expect(notEmpty(testField)).toBe(false);
});