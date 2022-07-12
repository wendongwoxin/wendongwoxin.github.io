function handler() {
    // ?
}

function reactive (target) {
    // ....
    return new Proxy(target, handler);
}