# Day 32 - Getters and Setters
On the day 32 of the 100 Days of Code challenge, I focused on learning about getters and setters in JS, which is a powerful feature that allows you to define methods for getting and setting the values of the object properties.
- Getters and setters are special methods that allow you to control access to the properties of an object. They are defined using the `get` and `set` keywords, respectively.   
---
> What are Getters and Setters?
- Getters and setters are special methods that allow you to control access to the properties of an obejct.
- A getter is a method that is used to get the value of a property. It is defined using the `get` keyword, followed by the name of the property.
- A setter is a method that is used to set the value of a property. It is defined using the `set` keyword, followed by the name of the property.
- Getters and setters are useful for encapsulating the internal representation of an object and providing a controlled interface for accessing and modifying its properties.
---
> Example of Getters and Setters:
```javascript
class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    get email(){
        return this._email.toUpperCase();
    }
    set email(newEmail){
        this._email = newEmail.toUpperCase();
    }

    get password(){
        return `${this._password}harshad`;
    }
    set password(newPassword){
        this._password = newPassword
    }
}
const harshad = new User("harshad@example.com", "SecurePassword@123");
console.log(harshad.email);
console.log(harshad.password);
```

- We have a defined a `User` class with two properties: `email` and `password`.
- Getter for the `email` property that returns the email in uppercase.
- Setter for the `email` property that sets the email in uppercase.
- Getter for the `password` property that appends "harshad" to the password.
- Setter for the `password` property that sets the password as is.
- When we create a new instance of the `User` class and access the `email` or `password` properties, the corresponding **getter** methods are called, and we get the modified values, vice versa for **setting** the values.
---
> > Use cases of **Getters** and **Setters**:
1. **Data validation**: Setters can be used to validate the data before setting the property value.
2. **Computed properties**: Getters can be used to define computed properties that are derived from other properties.
3. **Encapsulation**: Getters and setters can be used to encapsulate the internal representation of the object and provide a controlled interface for accessing and modifying its properties.
4. **Lazy loading**: Getters can be used to implement lazy loading, where the property value is only computed when it is accessed for the first time.
---
> > Practice problems:
1. Create a `Person` class with properties `firstName` and `lastName`. Use getters to return the full name and setters to update the first and last names.
2. Create a `BankAccount` class with a property `balance`. Use a getter to return the balance and a setter to deposit money into the account.
3. Create a `Rectangle` class with properties `width` and `height`. Use getters to calculate the area and perimeter of the rectangle.
4. Create a `Temperature` class with a property `celsius`. Use a getter to convert the temperature to Fahrenheit and a setter to update the temperature in Celsius.
5. Create a `Car` class with properties `make`, `model`, and `year`. Use getters to return a formatted string of the car's details and setters to update the make, model, and year.
---
# Summary
- Getters and setters are special methods that allow you to control access to the properties of an object.
- They are defined using the `get` and `set` keywords, respectively.
- Getters are used to get the value of a property, while setters are used to set the value of a property.
- They are useful for encapsulating the internal representation of an object and providing a controlled interface for accessing and modifying its properties.
- Use cases include data validation, computed properties, encapsulation, and lazy loading, among others.
- ---