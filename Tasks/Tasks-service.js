import fs from "fs";

const path = "./tasks.json";

 export  function addTask(description){

    //To check if the file exists or not, if not we will create a file
    if(!fs.existsSync(path)){
      fs.writeFileSync(path,JSON.stringify([]));
    }

    //Reading the file content and converting it to an array 
  const data = fs.readFileSync(path,"utf-8");
  const tasksArray = JSON.parse(data);

   //Create a new task 

   const newId = tasksArray.length > 0
    ? Math.max(...tasksArray.map(task => task.id)) + 1
    : 1;

   const newTask = {
      id: newId ,
      description : description ,
      status: "todo",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
   } ;
    
   //Adding the new task to the array 
   tasksArray.push(newTask);

   //Adding the array to the file
   const jsonData =JSON.stringify(tasksArray, null, 2);
   fs.writeFileSync(path,jsonData);


console.log(` Task added successfully (ID: ${newTask.id})`);
   
}

export function updateTask(id,newDesc){
   
    //To check if the file exists or not, if not we will create a file
    if(!fs.existsSync(path)){
      fs.writeFileSync(path,JSON.stringify([]));
    }

    //Reading the file content and converting it to an array
    const data = fs.readFileSync(path,"utf-8");
    const tasksArray = JSON.parse(data);

    //Finding the task 
    const indexTask = tasksArray.find(tasks=> tasks.id === id);
    if(indexTask === -1){
      console.log("The Task Not Exist ! ");
    }

    //Update task and date 
   indexTask.description = newDesc; 
   indexTask.updateDate = new Date().toISOString();

   //Adding the array to the file
   const jsonData =JSON.stringify(tasksArray, null, 2);
   fs.writeFileSync(path,jsonData);
   
   console.log("Done ");
}


export function deleteTask(id){

   //To check if the file exists or not, if not we will create a file
    if(!fs.existsSync(path)){
      fs.writeFileSync(path,JSON.stringify([]));
    }

    //Reading the file content and converting it to an array
    const data = fs.readFileSync(path,"utf-8");
    const tasksArray = JSON.parse(data);

    //Finding the task 
    const indexTask = tasksArray.findIndex(tasks=> tasks.id === Number(id));
    if(indexTask === -1){
      console.log("The Task Not Exist ! ");
    }

    // Delete the task 
    const deleteTask = tasksArray.splice(indexTask,1);
    

    for (let i = 0; i < tasksArray.length; i++) {
        tasksArray[i].id = i + 1;
     }


   //Adding the array to the file 
   const jsonData =JSON.stringify(tasksArray, null, 2);
   fs.writeFileSync(path,jsonData);

   console.log(deleteTask);
}


export function listTasks() {
  //To check if the file exists or not, if not we will create a file 
  if (!fs.existsSync(path)) {
    fs.writeFileSync(path, JSON.stringify([]));
  }

  // Reading the file content and converting it to an array
  const data = fs.readFileSync(path, "utf-8");
  const tasksArray = JSON.parse(data);

  // if there is no Tasks
  if (tasksArray.length === 0) {
    console.log("No tasks found");
    return;
  }

  // List Tasks
  console.log("All Tasks: ");
  tasksArray.forEach(task => {
    console.log(`ID: ${task.id} | Description: ${task.description} | Status: ${task.status}`);
  });
}


export function markInProgress(id){
  //To check if the file exists or not, if not we will create a file 
  if (!fs.existsSync(path)) {
    fs.writeFileSync(path, JSON.stringify([]));
  }

  // Reading the file content and converting it to an array
  const data = fs.readFileSync(path, "utf-8");
  const tasksArray = JSON.parse(data);

 //Finding the task 
    const markTask = tasksArray.find(tasks=> tasks.id === Number(id));
    if(!markTask){
      console.log("The Task Not Exist ! ");
    }
    
 //Mark Task
    markTask.status = "in progress";
    markTask.updatedAt = new Date().toISOString();

 //Adding the array to the file 
   const jsonData =JSON.stringify(tasksArray, null, 2);
   fs.writeFileSync(path,jsonData);
    
   console.log("Done");
   
}