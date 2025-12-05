// Build a "Get My Location" button (Geometrics) and copy URL to clipboard.

const button = document.getElementById('getLocationBtn');
const statusEl = document.getElementById('status');
const coordsEl = document.getElementById('coordinates');
const mapLinkContainer = document.getElementById('mapLinkContainer');

if (!button) {
    console.warn('No button with id "getLocationBtn" found.');
} else {
    button.addEventListener('click', getLocation);
}

function setStatus(message) {
    statusEl.textContent = message;
}

function clearOutput() {
    coordsEl.textContent = '';
    mapLinkContainer.innerHTML = '';
}

function getLocation() {
    if (!navigator.geolocation) {
        setStatus('Geolocation is not supported by this browser.');
        return;
    }

    clearOutput();
    setStatus('Locating…');
    button.disabled = true;

    navigator.geolocation.getCurrentPosition(showPosition, showError);
}

function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const url = `https://www.google.com/maps?q=${latitude},${longitude}`;

    coordsEl.textContent = `Latitude: ${latitude.toFixed(6)}, Longitude: ${longitude.toFixed(6)}`;
    mapLinkContainer.innerHTML = `<a href="${url}" target="_blank" rel="noopener">Open in Google Maps</a>`;

    navigator.clipboard.writeText(url)
        .then(() => {
            setStatus('Copied location URL to clipboard.');
        })
        .catch(() => {
            setStatus('Could not copy to clipboard. You can open the link above.');
        })
        .finally(() => {
            button.disabled = false;
        });
}

function showError(error) {
    const messages = {
        [error.PERMISSION_DENIED]: 'User denied the request for Geolocation.',
        [error.POSITION_UNAVAILABLE]: 'Location information is unavailable.',
        [error.TIMEOUT]: 'The request to get user location timed out.',
        [error.UNKNOWN_ERROR]: 'An unknown error occurred.'
    };

    setStatus(messages[error.code] || 'An unknown error occurred.');
    button.disabled = false;
}
