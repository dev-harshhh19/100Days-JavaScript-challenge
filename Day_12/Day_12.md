# Day 12

## Topic Covered 
- Nested Objects & Loops

> ## What I Learned
Today I learned about nested objects and how to use loops to access data inside them.  
A nested object means having objects within another object.  
It helps to organize data in a structured and readable way.
---
> ## Why Use
Nested objects are useful when dealing with complex or related data.  
They make it easier to group and access information, such as user profiles, product details, or API responses.
---
## Syntax
```javascript
const object = {
  key1: "value",
  key2: {
    innerKey1: "innerValue",
    innerKey2: "anotherValue"
  }
};
console.log(object.key2.innerKey1);
```

---

```JavaScript 
const student = {
  name: "Dev Harsh",
  age: 21,
  subjects: {
    programming: {
      languages: ["JavaScript", "Python", "C++"],
      framework: "React"
    },
    design: {
      tools: ["Figma", "Photoshop"],
      level: "Intermediate"
    }
  }
};

for (let category in student.subjects) {
  console.log(`Category: ${category}`);
  for (let key in student.subjects[category]) {
    console.log(`${key}:`, student.subjects[category][key]);
  }
}
```
### Explanation of Code

- The student object contains another object subjects, which itself has nested objects like programming and design.

- A for...in loop is used to go through each category in student.subjects.

- Inside that loop, another for...in loop accesses each key of the nested objects.

- The data is printed using console.log() for clarity.


# Summary

Today I learned how to access and print data from nested objects using loops.
This is useful when working with structured or API-based data that contains multiple levels of nesting.
Understanding how to navigate nested structures makes your code more efficient and organized.
