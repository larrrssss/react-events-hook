# React Events

Emit and listen to events in a React application.

## Install

```sh
npm i react-events-hook
```

## Usage

### Configuration

```ts
import { Event } from 'react-events-hook"

const ALERT = new Event<{ message: string }>();
```

### Emitting

```ts
ALERT.emit({ message: 'Big uff' });
```

### Listening

```ts
const cleanup = ALERT.on((data) => {
  // ...
});

// Use cleanup function on component unmount
cleanup();
```

### useEvent()

```tsx
import React from 'react';

import { useEvent } from 'react-events-hook';

export const App: React.FC = (props) => {

  useEvent(ALERT, () => {
    // ...
  });

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}
```