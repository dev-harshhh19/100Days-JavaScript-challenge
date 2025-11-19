function fetchUser(username){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!username){
                reject(`Username is required`);
            } else {
                resolve({userID: 1, username});
            }
        }, 1000);
    });
}

function fetchUserPosts(userID){
    return new Promise((resolve) => {
        setTimeout(() => {
            if(!userID){
                reject(`UserID is required`)
            } else {
                resolve([{id: 101, title: "Day 39 - Async/Await"},
                    {id: 102, title: "Understanding Promises"}
                ]);
            }
        }, 1500);
    });
}

async function loadUserProfile(username){
    try{
        console.log(`Fetching user...`);
        let user = await fetchUser(username);
        console.log(`User fetched:`, user);

        console.log(`Fetching user posts...`);

        let posts = await fetchUserPosts(user.userID);
        console.log(`User posts fetched:`, posts);

        return {
            user,
            posts,
            message: `User profile loaded successfully`
        };
    } catch (error){
        console.log(`Error: ${error}`);
        throw new Error(`Failed to load user profile: ${error}`);
    } finally {
        console.log(`Finished loading user profile.\n`);
    }
}

loadUserProfile("dev-harshhh").then((profile) => {
    console.log(`final result ${profile}`);
}).catch((error) => {
    console.log(`final error ${error.message}`);
})

/* This code defines three functions: `fetchUser`, `fetchUserPosts`, and `loadUserProfile`.
`fetchUser` simulates fetching user data with a delay, rejecting if no username is provided.
`fetchUserPosts` simulates fetching posts for a given user ID, also with a delay, rejecting if no user ID is provided.
`loadUserProfile` is an async function that orchestrates the fetching of user data and their posts. It uses `await` to handle the asynchronous operations sequentially. It includes error handling with `try...catch` and a `finally` block to log completion.
Finally, it calls `loadUserProfile` with a username and handles the resolved profile or caught error using `.then()` and `.catch()`.
*/