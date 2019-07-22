var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sumit123:sumit123@dbcluster-vgcbl.mongodb.net/test?retryWrites=true', { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Error: Unable to connect to MongoDB", err));

var empSchema = new mongoose.Schema({
    name: String,
    position : String,
    department : String,
    salary : String
})

var Employee  = mongoose.model('Employee', empSchema);

// module.exports.getEmployees = function(callback){
//     Employee.find(callback);
// }
async function getEmployees() {
    try {
        const todos = await Employee.find();
        return todos;
    }
    catch (err) {
        console.log("Error: Unable to query database");
        throw err;
    }
}

/* Get Todo by ID
 * IN: id (Todo object ID)
 * OUT: Single Todo object
 */
async function getEmployeeById(id) {
    try {
        const employee = await Employee.findById(id);
        return employee;
    }
    catch (err) {
        console.log("Error: Unable to query database");
        throw err;
    }
}

async function addEmployee(todoInfo) {
    // Instantiate the Course. Here Todo represents a document object
    const todo = new Employee(todoInfo);
      console.log("database ------", todo);
    // Validate and save the document
    try {
        // Use validate method to validate a document
        var result = await todo.validate(); 
        result = await todo.save();
        return result;
    }
    catch (err) {
        console.log("Error: Could not save document");
        throw err;
    }
}

/* Update a Todo by ID
 * IN: Course object, including object id
 * OUT: Updated Todo object
 */
async function updateEmployee(todoInfo) {
    console.log("model update id",todoInfo._id);
    const id = todoInfo._id;
    // find the document - findById()
    try {
        debugger;
        // let todo = await Todo.findById(id);
        let employee = await Employee.findById(id);
        console.log("dbid:"+employee);
        if (!employee) {
            console.log("Error: Cannot find todo with ID: ", id);
            throw new Error("Todo not found");
        }

        // Modify its properties
        employee.set(todoInfo);
        var ObjectId = require('mongodb').ObjectID;
        
        // save the document - save()
        const result = await employee.save({"_id:":ObjectId(employee.id),
           "name:":employee.name,
           "position:":employee.position,
            "department:":employee.department,
            "salary:":employee.salary}); 
        return result;
    }
    catch(err) {
        console.log("Error: Cannot save Employee Data with ID: ", id);
        throw err;
    }
}
/* Delete a todo by ID
 * IN: id (todo object ID)
 */
async function deleteEmployee(todoInfo){
    const id = todoInfo;
    // find the document - findById()
    try {
        let todo = await Employee.findById(id);
        if (!todo) {
            console.log("Error: Cannot find todo with ID: ", id);
            throw new Error("Todo not found");
        }
         console.log("sumit-id",id);
        // Modify its properties
     
        const result = await Employee.findByIdAndRemove(id);
    
        return result;
    }
    catch(err) {
        console.log("Error: Cannot delete todo with ID: ", id);
        throw err;
    }

}
module.exports.addEmployee=addEmployee;
module.exports.getEmployees=getEmployees;
module.exports.getEmployeeById=getEmployeeById;
module.exports.updateEmployee=updateEmployee; 
module.exports.deleteEmployee=deleteEmployee;
// module.exports.Employee=Employee;

