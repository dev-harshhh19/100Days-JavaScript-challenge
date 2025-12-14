import fs from "fs/promises";

async function fetchUserData() {
  try {
    const data = await fs.readFile("data.json", "utf-8");
    const jsonData = JSON.parse(data);

    console.log("Department:", jsonData.department);

    jsonData.students.forEach(user => {
      console.log(user.name);
    });

  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}

fetchUserData();
