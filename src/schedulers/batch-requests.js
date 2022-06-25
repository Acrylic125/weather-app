let requests = [];
let started = false;

export function addRequest(request) {
  requests.push(request);
}

export function clearAllRequests() {
  requests = [];
}

export function executeBatch() {
  requests.forEach((request) => {
    request();
  });
}

(function start() {
  if (started) return;
  started = true;
  setTimeout(executeBatch, 10000);
})();