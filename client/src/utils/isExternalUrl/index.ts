const base = new URL(`${window.location.protocol}//${window.location.host}`);

// eslint-disable-next-line no-restricted-globals
export const isExternalURL = (url: string) => new URL(url, base).hostname !== location.hostname;
