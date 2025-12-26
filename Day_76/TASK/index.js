import { normalizeUserPayload } from './normalize.js';

// Example nested API response (matches the Day 76 README)
const response = {
  user: {
    id: 1,
    name: 'Harshad',
    address: {
      street: '123 Main St',
      city: 'Mumbai',
    },
    posts: [
      { id: 101, title: 'Hello World', content: 'This is my first post' },
      { id: 102, title: 'Another Day', content: 'Today was great!' },
    ],
  },
};

const normalized = normalizeUserPayload(response);
console.log(JSON.stringify(normalized, null, 2));
