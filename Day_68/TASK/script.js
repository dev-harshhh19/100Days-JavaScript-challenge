// Import API functions from api.js
import { 
  fetchPosts, 
  fetchPostById, 
  fetchUsers, 
  fetchUserById,
  createPost,
  updatePost,
  deletePost,
  fetchData
} from './api.js';

// Example usage: Fetch and display all posts
async function displayPosts() {
  try {
    const posts = await fetchPosts();
    console.log('All Posts:', posts);
    
    // Display posts in the DOM (if you have HTML elements)
    const postsContainer = document.getElementById('posts-container');
    if (postsContainer) {
      postsContainer.innerHTML = posts
        .slice(0, 10) // Display first 10 posts
        .map(post => `
          <div class="post">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
          </div>
        `)
        .join('');
    }
  } catch (error) {
    console.error('Failed to display posts:', error);
  }
}

// Example usage: Fetch a single post
async function displaySinglePost(postId) {
  try {
    const post = await fetchPostById(postId);
    console.log('Single Post:', post);
    return post;
  } catch (error) {
    console.error('Failed to display post:', error);
  }
}

// Example usage: Fetch all users
async function displayUsers() {
  try {
    const users = await fetchUsers();
    console.log('All Users:', users);
    
    // Display users in the DOM
    const usersContainer = document.getElementById('users-container');
    if (usersContainer) {
      usersContainer.innerHTML = users
        .map(user => `
          <div class="user">
            <h4>${user.name}</h4>
            <p>Email: ${user.email}</p>
            <p>Website: ${user.website}</p>
          </div>
        `)
        .join('');
    }
  } catch (error) {
    console.error('Failed to display users:', error);
  }
}

// Example usage: Create a new post
async function createNewPost() {
  try {
    const newPost = await createPost({
      title: 'My New Post',
      body: 'This is the content of my new post',
      userId: 1
    });
    console.log('Created Post:', newPost);
    return newPost;
  } catch (error) {
    console.error('Failed to create post:', error);
  }
}

// Example usage: Update a post
async function updateExistingPost(postId) {
  try {
    const updatedPost = await updatePost(postId, {
      title: 'Updated Title',
      body: 'Updated content',
      userId: 1
    });
    console.log('Updated Post:', updatedPost);
    return updatedPost;
  } catch (error) {
    console.error('Failed to update post:', error);
  }
}

// Example usage: Delete a post
async function removePost(postId) {
  try {
    const result = await deletePost(postId);
    console.log('Deleted Post:', result);
    return result;
  } catch (error) {
    console.error('Failed to delete post:', error);
  }
}

// Example usage: Generic fetch
async function fetchCustomData(endpoint) {
  try {
    const data = await fetchData(endpoint);
    console.log('Fetched Data:', data);
    return data;
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }
}

// Event listeners for button clicks (if you have buttons in HTML)
document.addEventListener('DOMContentLoaded', () => {
  // Fetch posts button
  const fetchPostsBtn = document.getElementById('fetch-posts-btn');
  if (fetchPostsBtn) {
    fetchPostsBtn.addEventListener('click', displayPosts);
  }

  // Fetch users button
  const fetchUsersBtn = document.getElementById('fetch-users-btn');
  if (fetchUsersBtn) {
    fetchUsersBtn.addEventListener('click', displayUsers);
  }

  // Create post button
  const createPostBtn = document.getElementById('create-post-btn');
  if (createPostBtn) {
    createPostBtn.addEventListener('click', createNewPost);
  }

  // Auto-fetch posts on page load (optional)
  // displayPosts();
});

// Export functions for potential use in other modules
export { 
  displayPosts, 
  displaySinglePost, 
  displayUsers, 
  createNewPost,
  updateExistingPost,
  removePost,
  fetchCustomData
};
