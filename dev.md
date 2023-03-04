# Dev Log

## Project init

```bash
expostart rn-picker-tests
```

## Add Test

[Expo testing with Jest](https://docs.expo.dev/guides/testing-with-jest/)

```bash
npx expo install jest-expo jest
```

Add jest config `jest.config.ts`

```typescript
import type { Config } from "jest";

const config: Config = {
  preset: "jest-expo",
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)",
  ],
};

export default config;
```

Typescript config required `ts-node`
```bash
yarn add -D ts-node
```

Add command `test` to package.json scripts

```json
scripts: {
  ...
  "test": "jest"
}

```

Add `__tests__/App.test.tsx`
```typescript
import React from "react";
import renderer from "react-test-renderer";

import App from "../App";

describe("<App />", () => {
  it("has 1 child", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});
```

Jest tests ts files required 
```bash
yarn add -D @types/jest
```

## Add Picker

[picker expo docs](https://docs.expo.dev/versions/latest/sdk/picker/)

```bash
npx expo install @react-native-picker/picker
```
