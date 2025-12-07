# Days 57 - Date & Time 
The `date` object is infamous in the developer community. It was taken from Java early `java.util.Date` class, and it has some weird quirks that can cause bugs if you arent careful.

## 1. Creating a Date Object
There are four main ways to create date object using the `new Date()` constructor.

```javascript
// Current Date & Time
const now = new Date();

// From a timestamp (milliseconds since Jan 1, 1970)
const reference = new Date(0); // Jan 1, 1970 

// from a Date String (ISO Format is recommended)
const bithday = new Date('1990-01-01T00:00:00Z');

// Using arguments (year, month, day, hours, minutes, seconds, milliseconds)
const specificDate = new Date(2023, 0, 1, 12, 0, 0); // Jan 1, 2023, 12:00:00
```
---
## 2. The Timestamp
JavaScript doesn't actually store 'dates'. It stores **Number**. Specifically, it stores the number of **milliseconds** that have pases since January 1, 1970, 00:00:00 UTC

```javascript
const timestamp = now.getTime(); // milliseconds since Jan 1, 1970
console.log(timestamp);
```
---
## 3. Gotchas
1. **Months are Zero-Indexed**: 
    - January = `0`
    - December = `11`
    - **Bug**: If you create a date with `new Date(2023, 12, 1)`, it will actually represent January 1, 2024.
2. Days are 0-Indexed in `getDay()` method:
    - Sunday = `0`
    - Monday = `1`
    - Saturday = `6`
3. `getYear()` vs `getFullYear()`:
    - Never use `getYear()`, it returns the year minus 1900. Always use `getFullYear()`.

---

## 4. Common Methods
```javascript
const date = new Date('2023-03-15T12:00:00Z');
// Get components
console.log(date.getFullYear()); // 2023
console.log(date.getMonth());    // 2 (March)
console.log(date.getDate());     // 15
console.log(date.getDay());      // 3 (Wednesday)
console.log(date.getHours());    // 12
console.log(date.getMinutes());  // 0
```
```javascript
// Set components
date.setFullYear(2024);
date.setMonth(11); // December
date.setDate(25);  // 25th
```
---
## 5. Formatting Dates
JavaScript provides the `toLocaleDateString()` and `toLocaleTimeString()` methods for formatting dates and times according to locale.

```javascript
const date = new Date('2023-03-15T12:00:00Z');
console.log(date.toLocaleDateString('en-US')); // "3/15/2023
console.log(date.toLocaleTimeString('en-US')); // "12:00:00 PM"
```
---
## 6. Date Math 
You can perform date arithmetic by manipulating the timestamp.
```javascript
const start = new Date("2025-01-01");
const end = new Date("2025-01-15");

// Subtracting objects converts them to numbers (milliseconds) automatically
const diffInMs = end - start; 

// Convert ms to days: (1000ms * 60s * 60m * 24h)
const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
console.log(diffInDays); // Output: 14
```
---

NOTE: For more advanced date manipulation and formatting, consider using libraries like [date-fns](https://date-fns.org/) or [Luxon](https://moment.github.io/luxon/).

---
# Summary
- The `Date` object in JavaScript represents a single moment in time.
- Months are zero-indexed, so be careful when creating dates.
- Use `getFullYear()` instead of `getYear()`.
- Use `toLocaleDateString()` and `toLocaleTimeString()` for formatting.
- For complex date operations, consider libraries like date-fns or Luxon.
- Date arithmetic can be done by manipulating timestamps directly.
- Always be cautious of time zones when working with dates and times.
---
