// Runs before the React entrypoint. Do not persist or log the bearer token.
window.abopcGuestToken = /^[0-9a-f]{64}$/.test(location.hash.slice(1)) ? location.hash.slice(1) : '';
history.replaceState(null, '', location.pathname);
