# 🧠 Task Tracker (CLI App)

A simple **Command Line Task Tracker** built using **Node.js**, allowing you to manage your tasks easily from the terminal — no external libraries required.
# 🧠 About the Project :

This project is based on the Task Tracker challenge from roadmap.sh
I built it as part of my backend development learning journey using Node.js.
I also applied  modularization — splitting the code into multiple files (for example, separating logic, data handling, and the main interface) — to keep the project clean, scalable, and easy to maintain.

---

## 🚀 Features

- ➕ Add new tasks  
- ✏️ Update an existing task  
- ❌ Delete a task by ID  
- 📋 List all tasks  
- 🚧 Mark tasks as *in progress*  
- ✅ Mark tasks as *done*  
- 🔍 Filter tasks by status (todo / in progress / done)  
- 💾 Stores data locally in a JSON file  

---

## 🧩 Tech Stack

- **Node.js**
- **File System (`fs`)** module
- **JSON** for data persistence

---

## 📂 Project Structure

Task-Tracker/
│
├── main.js # Entry point (handles CLI arguments)
├── Tasks/
│ └── Tasks-service.js # Contains all core task functions
├── tasks.json # JSON file for task storage
└── README.md # Project documentation

---

## ⚙️ How to Run

1. Install [Node.js](https://nodejs.org/)  
2. Open a terminal in the project directory  
3. Use any of the following commands:

➕ Add a new task
node main.js add "Write The Task"

✏️ Update a task description
node main.js update <id> "New description"

❌ Delete a task by ID
node main.js delete <id>

📋 List all tasks
node main.js list

🚧 Mark a task as in progress
node main.js mark-in-progress <id>

✅ Mark a task as done
node main.js mark-done <id>

🟢 List all done tasks
node main.js list-all-done

🔴 List all not done tasks
node main.js list-all-not-done

🟡 List all in progress tasks
node main.js list-all-in-progress

---
## 🧠 Task Object Structure
Each task in tasks.json follows this structure:

json

  "id": 1,
  "description": "Learn Node.js",
  "status": "done",
  "createdAt": "2025-11-03T13:38:54.262Z",
  "updatedAt": "2025-11-03T13:44:59.446Z"
}

---
## 🧰 Function Overview
# addTask(description)
-Creates a new task and saves it to tasks.json.
-Auto-increments the id
-Sets status to "todo"
-Records createdAt and updatedAt

# updateTask(id, newDesc)
-Updates the description of a task by its ID.
-Updates the description
-Updates the updatedAt timestamp

# deleteTask(id)
-Deletes a task from the list by ID.
-Removes the task
-Reassigns sequential IDs to remaining tasks

# markInProgress(id)
-Marks a task’s status as "in progress".
-Updates the status
-Refreshes the updatedAt timestamp

# markDone(id)
-Marks a task’s status as "done".
-Updates the status
-Refreshes the updatedAt timestamp

# listAllTasks()
Displays all tasks in the file with their details.

# listAllDone()
Shows all tasks where status === "done".

# listAllNotDone()
Shows all tasks where status === "todo".

# listAllInProgress()
Shows all tasks where status === "in progress".

---
## 💾 Example Output

node main.js list
--------------------------------
ID: 1
Description: Learn Node.js
Status: done
Created At: 2025-11-03T13:38:54.262Z
Updated At: 2025-11-03T13:44:59.446Z
--------------------------------
ID: 2
Description: Build CLI Project
Status: in progress
Created At: 2025-11-03T14:00:00.000Z
Updated At: 2025-11-03T15:00:00.000Z


---
## 📖 Source
This project is based on the Task Tracker challenge from roadmap.sh
It was implemented as part of my backend learning journey using Node.js.

# =====>>> Project URL : https://roadmap.sh/projects/task-tracker

---
## 👩‍💻 Author
Rashada Al-Whaidi – Backend Engineer
## 👩‍💻 About Me :
I’m currently learning backend development using Node.js.
This project is part of my hands-on practice — I love experimenting with real-world mini-projects to strengthen my skills and understand backend concepts deeply.

📅 Created in November 2025
🛠️ Language: JavaScript (Node.js)

---
## 🌟 Notes
-This project runs entirely in the terminal.
-No npm packages or external dependencies.
-Perfect for learning Node.js File System and basic CLI logic.

