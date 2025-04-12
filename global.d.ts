// global.d.ts
import '@testing-library/jest-native/extend-expect';

declare namespace jest {
  interface Matchers<R> {
    toHaveStyle(style: Record<string, unknown>): R;
  }
}
