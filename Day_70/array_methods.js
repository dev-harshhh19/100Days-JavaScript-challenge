// Sample API Data
const apiUsers = [
    { id: 1, name: "Harshad Patel", age: 19, country: "India", salary: 50000, active: true },
    { id: 2, name: "Priya Sharma", age: 25, country: "India", salary: 60000, active: false },
    { id: 3, name: "Harsh Kumar", age: 22, country: "India", salary: 55000, active: true },
    { id: 4, name: "Alice Johnson", age: 30, country: "USA", salary: 70000, active: true },
    { id: 5, name: "John Smith", age: 28, country: "USA", salary: 65000, active: false },
    { id: 6, name: "Harshit Singh", age: 27, country: "India", salary: 58000, active: true },
    { id: 7, name: "Emma Brown", age: 23, country: "UK", salary: 52000, active: true },
    { id: 8, name: "Michael Chen", age: 35, country: "USA", salary: 80000, active: true }
];

// ============================================
// 1. MAP() - TRANSFORM DATA
// ============================================
console.log("1. MAP - TRANSFORM DATA");
console.log("------------------------");

// Extract just names
const userNames = apiUsers.map(user => user.name);
console.log("All user names:", userNames);

// Create email addresses from names
const userEmails = apiUsers.map(user => {
    const emailName = user.name.toLowerCase().replace(" ", ".");
    return `${emailName}@company.com`;
});
console.log("\nGenerated emails:", userEmails.slice(0, 3), "...");

// Transform to display format
const displayUsers = apiUsers.map(user => ({
    displayName: user.name,
    info: `${user.age} years old from ${user.country}`
}));
console.log("\nDisplay format:", displayUsers[0]);

// Calculate salary after 10% raise
const raisedSalaries = apiUsers.map(user => ({
    ...user,
    salary: user.salary * 1.1,
    raise: "10%"
}));
console.log("\nAfter 10% raise:", raisedSalaries[0].salary);

// ============================================
// 2. FILTER() - SELECT SPECIFIC DATA
// ============================================
console.log("\n\n2. FILTER - SELECT SPECIFIC DATA");
console.log("---------------------------------");

// Filter by name - Task requirement
const filterByName = (users, searchTerm) => {
    return users.filter(user => 
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
};

const harshUsers = filterByName(apiUsers, "harsh");
console.log(`Users with "harsh" in name (${harshUsers.length}):`, 
    harshUsers.map(u => u.name));

// Filter by age - Task requirement
const filterByAge = (users, minAge, maxAge) => {
    return users.filter(user => 
        user.age >= minAge && user.age <= maxAge
    );
};

const youngAdults = filterByAge(apiUsers, 20, 26);
console.log(`\nUsers aged 20-26 (${youngAdults.length}):`, 
    youngAdults.map(u => `${u.name} (${u.age})`));

// Filter active users
const activeUsers = apiUsers.filter(user => user.active);
console.log(`\nActive users (${activeUsers.length}):`, 
    activeUsers.map(u => u.name));

// Filter by country
const indianUsers = apiUsers.filter(user => user.country === "India");
console.log(`\nIndian users (${indianUsers.length}):`, 
    indianUsers.map(u => u.name));

// Complex filter - Multiple conditions
const premiumUsers = apiUsers.filter(user => 
    user.active && user.salary > 55000 && user.age < 30
);
console.log(`\nPremium users (active, salary>55k, age<30):`, 
    premiumUsers.map(u => u.name));

// ============================================
// 3. REDUCE() - AGGREGATE DATA
// ============================================
console.log("\n\n3. REDUCE - AGGREGATE DATA");
console.log("---------------------------");

// Total salary expenditure
const totalSalary = apiUsers.reduce((sum, user) => sum + user.salary, 0);
console.log(`Total salary: $${totalSalary.toLocaleString()}`);

// Average age
const averageAge = apiUsers.reduce((sum, user) => sum + user.age, 0) / apiUsers.length;
console.log(`Average age: ${averageAge.toFixed(1)} years`);

// Count users by country
const countByCountry = apiUsers.reduce((counts, user) => {
    counts[user.country] = (counts[user.country] || 0) + 1;
    return counts;
}, {});
console.log("\nUsers by country:", countByCountry);

// Group users by country
const groupByCountry = apiUsers.reduce((groups, user) => {
    if (!groups[user.country]) {
        groups[user.country] = [];
    }
    groups[user.country].push(user.name);
    return groups;
}, {});
console.log("\nGrouped by country:", groupByCountry);

// Find highest salary
const highestSalary = apiUsers.reduce((max, user) => 
    user.salary > max ? user.salary : max, 0);
console.log(`\nHighest salary: $${highestSalary.toLocaleString()}`);

// Count active vs inactive
const activeStatus = apiUsers.reduce((status, user) => {
    if (user.active) {
        status.active++;
    } else {
        status.inactive++;
    }
    return status;
}, { active: 0, inactive: 0 });
console.log("\nActive status:", activeStatus);

// ============================================
// 4. COMBINING METHODS - REAL-WORLD SCENARIOS
// ============================================
console.log("\n\n4. COMBINING METHODS");
console.log("--------------------");

// Scenario 1: Average salary of active Indian users
const avgIndianActiveSalary = apiUsers
    .filter(user => user.country === "India" && user.active)
    .map(user => user.salary)
    .reduce((sum, salary, _, arr) => sum + salary / arr.length, 0);
console.log(`Avg salary (active Indian users): $${avgIndianActiveSalary.toFixed(2)}`);

// Scenario 2: Names of young active users
const youngActiveNames = apiUsers
    .filter(user => user.active && user.age < 28)
    .map(user => user.name)
    .sort();
console.log("\nYoung active users:", youngActiveNames);

// Scenario 3: Salary statistics by country
const salaryStatsByCountry = apiUsers.reduce((stats, user) => {
    if (!stats[user.country]) {
        stats[user.country] = { total: 0, count: 0 };
    }
    stats[user.country].total += user.salary;
    stats[user.country].count++;
    return stats;
}, {});

// Add average to stats
Object.keys(salaryStatsByCountry).forEach(country => {
    const stats = salaryStatsByCountry[country];
    stats.average = stats.total / stats.count;
});
console.log("\nSalary stats by country:", salaryStatsByCountry);

// ============================================
// 5. ADVANCED FILTER FUNCTION - MAIN TASK
// ============================================
console.log("\n\n5. ADVANCED FILTER FUNCTION");
console.log("----------------------------");

function advancedUserFilter(users, criteria) {
    return users.filter(user => {
        // Name filter (partial match, case insensitive)
        if (criteria.name) {
            const nameMatch = user.name
                .toLowerCase()
                .includes(criteria.name.toLowerCase());
            if (!nameMatch) return false;
        }
        
        // Age filters
        if (criteria.minAge !== undefined && user.age < criteria.minAge) {
            return false;
        }
        if (criteria.maxAge !== undefined && user.age > criteria.maxAge) {
            return false;
        }
        
        // Country filter
        if (criteria.country && user.country !== criteria.country) {
            return false;
        }
        
        // Active status filter
        if (criteria.active !== undefined && user.active !== criteria.active) {
            return false;
        }
        
        // Salary filters
        if (criteria.minSalary !== undefined && user.salary < criteria.minSalary) {
            return false;
        }
        if (criteria.maxSalary !== undefined && user.salary > criteria.maxSalary) {
            return false;
        }
        
        return true;
    });
}

// Test cases
console.log("Test 1: Filter by name 'harsh'");
const test1 = advancedUserFilter(apiUsers, { name: "harsh" });
console.log(`Found ${test1.length} users:`, test1.map(u => u.name));

console.log("\nTest 2: Active users aged 25-30");
const test2 = advancedUserFilter(apiUsers, { 
    minAge: 25, 
    maxAge: 30, 
    active: true 
});
console.log(`Found ${test2.length} users:`, test2.map(u => `${u.name} (${u.age})`));

console.log("\nTest 3: Indian users with salary 55k-70k");
const test3 = advancedUserFilter(apiUsers, { 
    country: "India",
    minSalary: 55000,
    maxSalary: 70000
});
console.log(`Found ${test3.length} users:`, 
    test3.map(u => `${u.name} ($${u.salary})`));

console.log("\nTest 4: Complex query - 'harsh' in name, age 20-25, active");
const test4 = advancedUserFilter(apiUsers, {
    name: "harsh",
    minAge: 20,
    maxAge: 25,
    active: true
});
console.log(`Found ${test4.length} users:`, test4.map(u => u.name));

// ============================================
// 6. PRACTICAL UTILITIES
// ============================================
console.log("\n\n6. PRACTICAL UTILITIES");
console.log("----------------------");

// Search function (like a search bar)
function searchUsers(users, searchTerm) {
    const term = searchTerm.toLowerCase();
    return users.filter(user => 
        user.name.toLowerCase().includes(term) ||
        user.country.toLowerCase().includes(term)
    );
}

const searchResults = searchUsers(apiUsers, "a");
console.log(`Search for 'a' found ${searchResults.length} users`);

// Pagination helper
function paginateUsers(users, page = 1, perPage = 3) {
    const start = (page - 1) * perPage;
    const end = start + perPage;
    return {
        data: users.slice(start, end),
        page,
        perPage,
        total: users.length,
        totalPages: Math.ceil(users.length / perPage)
    };
}

const page1 = paginateUsers(apiUsers, 1, 3);
console.log("\nPage 1 (3 per page):", page1.data.map(u => u.name));
console.log(`Showing ${page1.data.length} of ${page1.total} users (Page ${page1.page}/${page1.totalPages})`);

// Sort helper
function sortUsers(users, field, ascending = true) {
    return [...users].sort((a, b) => {
        if (ascending) {
            return a[field] > b[field] ? 1 : -1;
        } else {
            return a[field] < b[field] ? 1 : -1;
        }
    });
}

const sortedByAge = sortUsers(apiUsers, 'age');
console.log("\nSorted by age:", sortedByAge.map(u => `${u.name} (${u.age})`));

// ============================================
// 7. PERFORMANCE COMPARISON
// ============================================
console.log("\n\n7. PERFORMANCE TIPS");
console.log("-------------------");

// Good: Single pass with filter
const efficientFilter = apiUsers.filter(user => 
    user.active && user.age > 25
);

// Bad: Multiple passes
const inefficientFilter = apiUsers
    .filter(user => user.active)
    .filter(user => user.age > 25);

console.log("Use single filter with && for multiple conditions");
console.log("Efficient result:", efficientFilter.length);

// Good: Early return in reduce
const efficientSum = apiUsers.reduce((sum, user) => {
    if (!user.active) return sum;
    return sum + user.salary;
}, 0);
console.log(`\nEfficient sum (active only): $${efficientSum.toLocaleString()}`);

console.log("\n=== DAY 70 COMPLETE ===");
