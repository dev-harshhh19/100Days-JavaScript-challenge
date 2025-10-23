const object = {
  key1: "value",
  key2: {
    innerKey1: "innerValue",
    innerKey2: "anotherValue"
  }
};

// Accessing nested data
console.log(object.key2.innerKey1);




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