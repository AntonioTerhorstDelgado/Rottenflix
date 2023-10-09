var zoom = 1;

function zoomIn() {
    zoom += 0.1;
    document.body.style.zoom = zoom;
}

function zoomOut() {
    zoom -= 0.1;
    document.body.style.zoom = zoom;
}

function resetZoom() {
    zoom = 1;
    document.body.style.zoom = zoom;
}