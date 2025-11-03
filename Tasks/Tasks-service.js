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
   const newTask = {
      id: tasksArray.length +1 ,
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

    // 

    
    const indexTask = tasksArray.find(tasks=> tasks.id === id);
    if(indexTask === -1){
      console.log("The Task Not Exist ! ");
    }

    // 
   indexTask.description = newDesc; 
   indexTask.updateDate = new Date().toISOString();

   //Adding the array to the file
   const jsonData =JSON.stringify(tasksArray, null, 2);
   fs.writeFileSync(path,jsonData);
   
   console.log("Done ");
}