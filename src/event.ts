export type EventPayload = any;

export type EventCallbackFunc<P = EventPayload> = (payload: P) => void;

export class Event<P = EventPayload> {
  private callbacks: Set<EventCallbackFunc<P>> = new Set();

  public payload?: P;

  private onNextCallback?: (payload?: P) => any;

  public on(callback: EventCallbackFunc<P>): () => void {
    const cleanupFunc = () => this.unsub(callback);

    this.callbacks.add(callback);
  
    return cleanupFunc;
  }

  public emit(payload: P): void {
    this.callbacks.forEach(callback => callback(payload));

    if (typeof this.onNextCallback === 'function') {
      this.onNextCallback(payload);
      delete this.onNextCallback;
    }
  }

  public onNext(callback: (payload?: P) => any) {
    this.onNextCallback = callback;
  }

  private unsub(callback: EventCallbackFunc<P>): void {
    this.callbacks.delete(callback);
  }
}