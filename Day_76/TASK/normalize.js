export function normalizeUserPayload(payload) {
    // basic payload check
    if (!payload || typeof payload !== "object") {
        throw new Error("Payload must be an object");
    }

    const user = payload.user;

    // basic user check
    if (!user || typeof user !== "object") {
        throw new Error("Payload must contain a user object");
    }

    const users = {};
    const addresses = {};
    const posts = {};

    // normalize address
    let addressId = null;
    if (user.address && typeof user.address === "object") {
        addressId = user.id;
        addresses[addressId] = user.address;
    }

    // normalize posts
    const postIds = [];

    if (Array.isArray(user.posts)) {
        user.posts.forEach(post => {
            if (!post || typeof post !== "object" || post.id == null) {
                throw new Error("Each post must be an object with an id");
            }

            posts[post.id] = {
                ...post,
                userId: user.id
            };

            postIds.push(post.id);
        });
    }

    // normalize user
    users[user.id] = {
        id: user.id,
        name: user.name,
        addressId,
        postIds
    };

    return { users, addresses, posts };
}
