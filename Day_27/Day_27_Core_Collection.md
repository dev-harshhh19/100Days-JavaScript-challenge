# Day 27

## Topic:
- **Sets**
- **Maps**
- **Hashing**
---

### Sets
- A set is a collection of **unique values**. 
- No duplicate are allowed.
- It can store any type of value (primitive or object).
- Common operations: add, remove, check existence.

> Creating a Set
```javascript
const mySet = new Set([1, 2, 3, 4, 4, 5]);
console.log(mySet); // Set(5) { 1, 2, 3, 4, 5 }
```
- Notice that the duplicate `4` is ignored.
---
> Basic methods
```javascript
const basicSet = new Set();

// add values
basicSet.add(1);
basicSet.add(2);
basicSet.add(3);
basicSet.add(3); // Duplicate, won't be added
console.log(basicSet); // Set(3) { 1, 2, 3 }

// check existence
console.log(basicSet.has(2)); // true
console.log(basicSet.has(4)); // false

// remove value
basicSet.delete(2);
console.log(basicSet); // Set(2) { 1, 3 }

// get size
console.log(basicSet.size); // 2

// clear all values
basicSet.clear();
console.log(basicSet); // Set(0) {}
```
---
> Iteration
```javascript
const numberSet = new Set([1, 2, 3, 4, 5]);
for (const num of numberSet){
    console.log(num);
}

// or using forEach
numberSet.forEach(num => console.log(num));
```
- The forEach method is a cleaner way to iterate over sets.
- Outputs each number in the set.
---

### Maps
- A map is a collection of **key-value pairs**.
- Keys can be of any type (primitive or object).
- Common operations: set, get, delete, check existence.
- Map maintains the order of insertion.
- Useful for associating data.
---
> Creating a Map
```javascript
const myMap = new Map();

myMap.set('name', 'Harshad');
myMap.set('age', 19);
myMap.set(1, 'One'); // Key can be a number too

console.log(myMap); // Map(3) { 'name' => 'Harshad', 'age' => 19, 1 => 'One' }
```
- We create a map and add key-value pairs using the `set` method.
---
> Basic methods
```javascript
console.log(myMap.get('name')); // 'Harshad'
console.log(myMap.has('age')); // true
myMap.delete(1);
console.log(myMap);
console.log(myMap.size); // 2
myMap.clear();
console.log(myMap); // Map(0) {}
```
- We retrieve values using `get`, check existence with `has`, delete entries with `delete`, get size with `size`, and clear all entries with `clear`.
---
> Iteration
```javascript
const userMap = new Map([
    ['name', 'Harshad'],
    ['age', 19],
    ['city', 'Mumbai']
]);
for (let [key, value] of userMap){
    console.log(`Key: ${key} = ${value}`);
}

// or using forEach
userMap.forEach((value, key) => console.log(`Key: ${key} = ${value}`));
```
- We can iterate over maps using `for...of` or `forEach`.
- Maps are perfect when you need **flexible key, ordered-pair** or **frequent additions/deletions**.
---

### Hashing
> 1. What is Hashing?
- Hashing is a techinique used to convert data into a fixed-size string of characters, which is typically a sequence of numbers and letters.
- It is commonly used in data structures like hash tables to enable fast data retrieval.
- A hash function takes an input (or `key`) and returns a hash code (or `hash`).
- The hash code is used to index the data in the hash tables.
- Think like an library catalog.
  - Instead of scanning all books to find one, you use the call number to jump directly to its location
- Key Idea:
  - Hashing lets operations like lookup, insert, delete happen in average O(1) time. Which is super fast!
---
> 2. Hash function
```javascript
hash(key) -> index in array
```
- If your key is `"Snow"` and your Hash function returns `5`, you store the value at index `5` in an array.
- When you want to retrieve the value for `"Snow"`, you hash it again to get `5` and look up the value at that index.

##### Properties of a good hash function:
1. Fast to compute.
2. Uniformly distributes keys (avoid clustering).
3. Minimizes collisions (two keys mapping at the same index).
---
> 3. Collision Handling
- Collisions happen when two keys hash to the same index.
- Common strategies:
  1. **Chaining**: Store multiple key-value pairs at the same index using a linked list or array.
  2. **Open Addressing**: Find the next available index using probing (linear, quadratic, or double hashing).
  3. **Rehashing**: Use a secondary hash function to find a new index.
---
> 4. Hashing in JavaScript
- Even through you don't manually create hash table often in JS, **Maps and Sets use hashing internally**
   - `Set.has(value)` -> O(1) average
   - `Map.get(key)` -> O(1) average
- So when you using `Map` or `Set`, you are **already benefiting from hashing**!
---
### Example with objects
```javascript
const myMap = new Map();
myMap.set({id: 1}), "Object 1";
myMap.set({id: 2}), "Object 2";
console.log(myMap.has({ id: 1 })) // false or undefined! why?
```
- Each object is a different reference, so hashing sees them as unique keys.
---
> 5. Why learn Hashing?
- Helps to undestand why maps and sets are fast.
- Essential if you start implementing you own data structures.
- Crutial for coding interviews (common topic).
- Widely used in real-world applications (caching, databases, etc).
---

### Quick overview of hash:
- **Hashing**: Maps keys to array indices using a hash function.
- **collision**: Two keys map to the same index.
- **JS maps and sets**: Use hashing internally for fast operations.
---

# Summery
- Sets store unique values, while Maps store key-value pairs.
- Both Sets and Maps provide efficient methods for adding, removing, and checking existence of elements.
- Hashing is a technique that enables fast data retrieval by mapping keys to indices using hash functions.
- Understanding these concepts is crucial for effective programming and data structure implementation.