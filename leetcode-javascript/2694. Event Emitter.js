class EventEmitter {
  map = new Map();

  subscribe(event, cb) {
    if (!this.map.has(event)) this.map.set(event, []);
    this.map.get(event).push(cb);

    return {
      unsubscribe: () => {
        const callbacks = this.map.get(event)
        callbacks.splice(callbacks.findIndex((callback) => callback === cb), 1);
      },
    };
  }

  emit(event, args = []) {
    if (!this.map.has(event)) return [];
    return this.map.get(event).map((callback) => callback(...args));
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
