export function loadJsonAndResponse(url) {
    return fetch(url)
    .then(response => response.json())
    }

