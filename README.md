# Toolkit

React utility functions.

[Storybook](http://toolkit.tinloof.com/)

## Install

```
yarn add @tinloof/toolkit
```

## Usage

### Stack
> Requires Emotion and React.

```js
import { Stack } from "@tinloof/toolkit";

function App() {
  <Stack>
    ...
  </Stack>
}
```

### Row
> Requires Emotion and React.

```js
import { Row } from "@tinloof/toolkit";

function App() {
  <Row>
    ...
  </Row>
}
```

### useFirebaseAuth
> Requires Firebase and React

```js
// firebaseConfig.js
export default {
...
};

// _app.js
import { ProvideAuth } from "@tinloof/toolkit/lib/useFirebaseAuth";
import firebaseConfig from "../firebaseConfig";

import "../styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <ProvideAuth config={firebaseConfig}>
      <Component {...pageProps} />
    </ProvideAuth>
  );
}

export default App;

// index.js
import Link from "next/link";

import useFirebaseAuth from "@tinloof/toolkit/lib/useFirebaseAuth";

export default function Home() {
  const { user } = useFirebaseAuth();

  if (user === "loading") {
    return <h1>Loading...</h1>;
  }

  const message = user ? "Logged-in!" : "Not logged-in.";

  return (
    <>
      <h1>Event page</h1>
      <p>{message}</p>
      <Link href="/anotherProtectedPage">
        <a>Go to another protected page</a>
      </Link>
    </>
  );
}
```

## Running storybook

```
yarn start
```
