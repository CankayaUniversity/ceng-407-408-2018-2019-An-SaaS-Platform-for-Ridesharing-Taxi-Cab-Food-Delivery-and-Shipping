export function error(...params) {
  if (process.env.NODE_ENV === 'development') {
    console.error(...params);
  }
}

export function log(...params) {
  if (process.env.NODE_ENV === 'development') {
    console.log(...params);
  }
}

export function debug(...params) {
  if (process.env.NODE_ENV === 'development') {
    console.debug(...params);
  }
}

export function warn(...params) {
  if (process.env.NODE_ENV === 'development') {
    console.warn(...params);
  }
}

