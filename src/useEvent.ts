import * as React from 'react';

import { Event, EventCallbackFunc } from './event';

export function useEvent<E extends Event>(event: E, callback: EventCallbackFunc<E['payload']>) {
  React.useEffect(() => {
    const unsub = event.on(callback);
    return () => unsub();
  }, []);
}