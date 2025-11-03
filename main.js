
// app.js is the interface of the project

import * as service from "./Tasks/Tasks-service.js";

console.log( `       
                      ====> Task Tracker <====  

                * The options you can make : 

                      -add Tasks ==> add
                      -update Tasks ==> update
                      -delete Tasks ==> delete
                      -list all Tasks ==> list
                      -Mark a Task as in progress ==> mark-in-progress
                      -Mark a Task as done ==> mark-done
                      -List all tasks that are done ==> list-all-done
                      -List all tasks that are not done ==> list-all-not-done
                      -List all tasks that are in progress ==> list-all-in-progress
                      `);

const args = process.argv.slice(2);
const command = args[0];



switch(command){
 case "add":
       service.addTask(args[1]);
        break;
case "update":
        service.updateTask(Number(args[1]),args[2]);
        break;
case "delete":
        service.deleteTask(Number(args[1]));
        break;
case "list":
        service.listTask();
        break;    
case "mark-in-progress":
        service.markInProgress(Number(args[1]));
        break;      
case "mark-done":
        service.markDone(Number(args[1]));
        break;
case "list-all-done":
        service.listAllDone();
        break;
case "list-all-not-done":
        service.listAllNotDone();
        break;            
case "list-all-in-progress":
        service.listAllInProgress();
        break;   

}
   
