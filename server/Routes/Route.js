const { addEmployee ,getEmployees,getEmployeeById ,updateEmployee,deleteEmployee} = require('../Models/Model');
const express = require('express');


const route = express.Router();

//" /api/todos - URL"
// Route handler for get all todos
route.get('/', (req, res) => {
    // Get all todos
    getEmployees()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(500);
            res.send("Error: Unable to get todo\n" + err.message);
            console.log("Error: Unable to get todo\n", err);
        })
});

//API with param id
route.get('/:id', (req, res) => {
    const id = req.params.id;
    // Get the todo object using id
    getEmployeeById(id)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(404);
            res.send("Error: Unable to get todo\n" + err.message);
            console.log("Error: Unable to get todo\n", err);
        })
});

/****************** END: get requests *************/

route.post('/', (req, res) => {
    // Validate the todo info
    console.log("Received todo object", req.body); 
    // let employee = new Employee(req.body);
    // employee.save()
    // .then(business => {
    //   res.status(200).json({'business': 'business in added successfully'});
    // })
    // .catch(err => {
    // res.status(400).send("unable to save to database");
    // });
    
    // Add todo to db
    addEmployee(req.body) // JSON todo object
    
        .then((result) => {
            console.log("Let mE Check patil",result)  
            res.send(result); //  Send the result (new todo object) back to user
            console.log("Created a new todo: ", result.name);
        })         
        .catch((err) => {
            res.status(500);
            res.send("Error: Unable to create todo\n" + err.message);
            console.log("Error: Unable to create todo\n", err);
        });
});
route.put('/:id', (req, res) => {
    // Look up the todo. If not found return 404

    // Look up the todo. If not found return 404
    const id = req.params.id;
       console.log( "route id",id)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
    // Get the todo object using id
    getEmployeeById(id)
        .then((result) => {
            // id is valid. Update the todo
            // Add id field to todo object
            var todo = req.body; 
            console.log("Route Body",todo); 
            todo._id = id;
          
           
             console.log("Employee-print",todo);
            // Update todo to db
            updateEmployee(todo) // JSON todo object
                .then((result) => {
                    res.send(result); //  Send the result (updated todo object) back to user
                    console.log("Updated Employee: ", result.name);
                })
                .catch((err) => {
                    res.status(500);
                    res.send("Error: Unable to update Employee\n" + err.message);
                    console.log("Error: Unable to create todo\n", err);
                });

        })
        .catch((err) => {
            res.status(404);
            res.send("Error: Unable to get todo\n" + err.message);
            console.log("Error: Unable to get todo\n", err);
        })

});
// Handler to delete a todo using delete method
route.delete('/:id', (req, res) => {
    // Look up the todo. If not found return 404
    console.log('welcome');
    // Look up the course. If not found return 404
    var todo=req.params.id;
console.log(todo);
    deleteEmployee(todo) // JSON course object
    .then((result) => {
        res.send(result); //  Send the result (updated course object) back to user
        console.log("Deleted todo: ", result.name);
    })      
    .catch((err) => {
        res.status(500);
        res.send("Error: Unable to deleted todo\n" + err.message);
        console.log("Error: Unable to create todo\n", err);
    });

});
module.exports=route;

