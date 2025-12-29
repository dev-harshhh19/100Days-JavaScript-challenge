async function loadDashboard(userId) {
    console.log("Dashboard loading...");

    const userRequest = fetch(`/api/users/${userId}`);
    const statsRequest = fetch(`/api/stats/${userId}`);

    setTimeout(() => {
        console.log("Timeout finished");
    }, 0);

    const user = await userRequest.json();
    const stats = await statsRequest.json();

    renderDashboard(user, stats);
}

function renderDashboard(user, stats) {
    console.log("User:", user.name);
    console.log("Stats:", stats.score);
}

loadDashboard(7);

// Expected output order:
// "Dashboard loading..."
// "Timeout finished"
// "User: [user's name]"
// "Stats: [user's score]"