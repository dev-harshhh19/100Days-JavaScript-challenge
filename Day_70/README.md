# **Day 70: Array Methods Review (Map, Filter, Reduce)**

> Mastering array methods for data manipulation and API response handling.

### **Why Array Methods Matter?**
- Essential for working with API data (filtering, transforming, aggregating).
- Make code more readable and maintainable than traditional loops.
- Enable functional programming patterns in JavaScript.
- Critical for real-world applications dealing with lists of users, products, etc.

---

## **1. Map() - Transform Data**

> **What is `map()`?**
- Creates a **new array** by transforming each element using a callback function.
- Does **not modify** the original array.
- Always returns an array of the **same length**.

#### Syntax:
```javascript
array.map((element, index, array) => {
    // return transformed element
});
```

#### Example 1: Basic Transformation
```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
console.log(numbers); // [1, 2, 3, 4, 5] (original unchanged)
```

#### Example 2: Extract Specific Properties from API Data
```javascript
const users = [
    { id: 1, name: "Harshad", age: 19, city: "Mumbai" },
    { id: 2, name: "Priya", age: 25, city: "Delhi" },
    { id: 3, name: "Rohan", age: 22, city: "Bangalore" }
];

// Extract just the names
const userNames = users.map(user => user.name);
console.log(userNames); // ["Harshad", "Priya", "Rohan"]

// Create summary objects
const userSummary = users.map(user => ({
    name: user.name,
    location: user.city
}));
console.log(userSummary);
// [{ name: "Harshad", location: "Mumbai" }, ...]
```

---

## **2. Filter() - Select Specific Data**

> **What is `filter()`?**
- Creates a **new array** containing only elements that pass a test.
- Returns elements where the callback returns `true`.
- Resulting array can be **shorter** than the original.

#### Syntax:
```javascript
array.filter((element, index, array) => {
    // return true to keep element, false to discard
});
```

#### Example 1: Filter by Condition
```javascript
const numbers = [5, 12, 8, 130, 44];
const largeNumbers = numbers.filter(num => num > 10);
console.log(largeNumbers); // [12, 130, 44]
```

#### Example 2: Filter API Users by Name
```javascript
const users = [
    { id: 1, name: "Harshad", age: 19, country: "India" },
    { id: 2, name: "John", age: 25, country: "USA" },
    { id: 3, name: "Harsh", age: 22, country: "India" },
    { id: 4, name: "Alice", age: 30, country: "UK" }
];

// Filter users whose name contains "Harsh"
const harshUsers = users.filter(user => 
    user.name.toLowerCase().includes("harsh")
);
console.log(harshUsers);
// [{ id: 1, name: "Harshad", ... }, { id: 3, name: "Harsh", ... }]
```

#### Example 3: Filter API Users by Age
```javascript
// Users above 20 years old
const adults = users.filter(user => user.age > 20);
console.log(adults);
// [{ id: 2, name: "John", age: 25, ... }, ...]

// Users in a specific age range
const youngAdults = users.filter(user => user.age >= 18 && user.age <= 25);
console.log(youngAdults);
```

#### Example 4: Multiple Filter Conditions
```javascript
// Indian users above 20
const indianAdults = users.filter(user => 
    user.country === "India" && user.age > 20
);
console.log(indianAdults);
```

---

## **3. Reduce() - Aggregate Data**

> **What is `reduce()`?**
- Reduces an array to a **single value** by executing a reducer function.
- Can return any type: number, string, object, or even another array.
- Most powerful but also most complex array method.

#### Syntax:
```javascript
array.reduce((accumulator, currentValue, index, array) => {
    // return updated accumulator
}, initialValue);
```

#### Example 1: Sum of Numbers
```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 15
```

#### Example 2: Calculate Average Age from API Users
```javascript
const users = [
    { name: "Harshad", age: 19 },
    { name: "Priya", age: 25 },
    { name: "Rohan", age: 22 },
    { name: "Alice", age: 30 }
];

const totalAge = users.reduce((sum, user) => sum + user.age, 0);
const averageAge = totalAge / users.length;
console.log(averageAge); // 24
```

#### Example 3: Group Users by Country
```javascript
const users = [
    { name: "Harshad", country: "India" },
    { name: "John", country: "USA" },
    { name: "Priya", country: "India" },
    { name: "Alice", country: "UK" }
];

const groupedByCountry = users.reduce((groups, user) => {
    const country = user.country;
    if (!groups[country]) {
        groups[country] = [];
    }
    groups[country].push(user);
    return groups;
}, {});

console.log(groupedByCountry);
/* 
{
    India: [{ name: "Harshad", ... }, { name: "Priya", ... }],
    USA: [{ name: "John", ... }],
    UK: [{ name: "Alice", ... }]
}
*/
```

#### Example 4: Count Occurrences
```javascript
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const fruitCount = fruits.reduce((count, fruit) => {
    count[fruit] = (count[fruit] || 0) + 1;
    return count;
}, {});
console.log(fruitCount);
// { apple: 3, banana: 2, orange: 1 }
```

---

## **4. Combining Array Methods - Real-World Scenarios**

#### Example 1: Chain Filter + Map
```javascript
const users = [
    { name: "Harshad", age: 19, active: true },
    { name: "Priya", age: 25, active: false },
    { name: "Rohan", age: 22, active: true },
    { name: "Alice", age: 30, active: true }
];

// Get names of active users above 20
const activeAdultNames = users
    .filter(user => user.active && user.age > 20)
    .map(user => user.name);

console.log(activeAdultNames); // ["Rohan", "Alice"]
```

#### Example 2: Filter + Reduce
```javascript
// Calculate total age of active users
const totalActiveAge = users
    .filter(user => user.active)
    .reduce((sum, user) => sum + user.age, 0);

console.log(totalActiveAge); // 71 (19 + 22 + 30)
```

#### Example 3: Complete API Data Processing
```javascript
const apiUsers = [
    { id: 1, name: "Harshad", age: 19, salary: 50000, dept: "IT" },
    { id: 2, name: "Priya", age: 25, salary: 60000, dept: "HR" },
    { id: 3, name: "Rohan", age: 22, salary: 55000, dept: "IT" },
    { id: 4, name: "Alice", age: 30, salary: 70000, dept: "IT" }
];

// Find average salary of IT department members above 20
const itAvgSalary = apiUsers
    .filter(user => user.dept === "IT" && user.age > 20)
    .map(user => user.salary)
    .reduce((sum, salary, _, arr) => sum + salary / arr.length, 0);

console.log(itAvgSalary); // 62500
```

---

## **5. Practical Task: Filter API Users**

### Task 1: Filter by Name
```javascript
const apiUsers = [
    { id: 1, name: "Harshad Patel", age: 19 },
    { id: 2, name: "Priya Sharma", age: 25 },
    { id: 3, name: "Harsh Kumar", age: 22 },
    { id: 4, name: "Alice Johnson", age: 30 },
    { id: 5, name: "Harshit Singh", age: 27 }
];

// Search function - case insensitive
function filterByName(users, searchTerm) {
    return users.filter(user => 
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
}

console.log(filterByName(apiUsers, "harsh"));
// Returns all users with "harsh" in their name
```

### Task 2: Filter by Age Range
```javascript
function filterByAgeRange(users, minAge, maxAge) {
    return users.filter(user => 
        user.age >= minAge && user.age <= maxAge
    );
}

console.log(filterByAgeRange(apiUsers, 20, 26));
// [{ name: "Priya Sharma", age: 25 }, { name: "Harsh Kumar", age: 22 }]
```

### Task 3: Advanced Multi-Criteria Filter
```javascript
function advancedFilter(users, criteria) {
    return users.filter(user => {
        // Name filter
        if (criteria.name) {
            const nameMatch = user.name
                .toLowerCase()
                .includes(criteria.name.toLowerCase());
            if (!nameMatch) return false;
        }
        
        // Age filter
        if (criteria.minAge && user.age < criteria.minAge) return false;
        if (criteria.maxAge && user.age > criteria.maxAge) return false;
        
        return true;
    });
}

// Usage
const results = advancedFilter(apiUsers, {
    name: "harsh",
    minAge: 20,
    maxAge: 25
});
console.log(results);
// [{ name: "Harsh Kumar", age: 22 }]
```

---

## **6. Performance Tips & Best Practices**

### Do's:
```javascript
// Use method chaining for readability
const result = users
    .filter(u => u.active)
    .map(u => u.name)
    .sort();

// Use arrow functions for concise code
const ages = users.map(u => u.age);

// Return early in filters
const adults = users.filter(u => {
    if (u.age < 18) return false;
    return u.isVerified;
});
```

###  Don'ts:
```javascript
// Don't modify original array inside map/filter
users.map(u => {
    u.age++; //  Mutates original
    return u;
});

// Don't use unnecessary chains
users.map(u => u).filter(u => u); //  Redundant

// Don't forget return in multi-line arrows
const names = users.map(u => {
    u.name.toUpperCase() //  Missing return
});
```

---

## **Key Takeaways**
- **`map()`** → Transform each element → Same length array
- **`filter()`** → Select elements → Shorter or equal length array  
- **`reduce()`** → Aggregate to single value → Any type
- Chain methods for complex operations
- Essential for working with API responses
- Immutable - don't modify original arrays

---

# Summary
- Mastery of `map()`, `filter()`, and `reduce()` is crucial for effective data manipulation in JavaScript.
- These methods enhance code readability and maintainability, especially when dealing with API data.
---