import express from "express";
const router = express.Router();
export default router;

import { createEmployee, getEmployee, getEmployees, deleteEmployee, updateEmployee } from "#db/queries/employees";


router.route("/").get(async (req, res) => {
  const employees = await getEmployees();
  res.send(employees);
});

router.route("/").post(async (req, res)=>{
    if(!req.body){
      return res.status(400).send({error: "Missing req. body"})
    }
    
    const {name, birthday, salary} = req.body
    
    if(!name || !birthday || !salary){
      return res.status(400).send({error: "Missing required params"})
    }

  const employee = await createEmployee ({name, birthday, salary})

  res.status(201).send(employee)
})

router.route("/:id").get(async (req,res)=>{
  const {id} = req.params.id

  if (id < 0 || Number.isInteger(id)){
      return res.status(400).send({error: "ID is not positive integer."})
    }

  const employee = await getEmployee(id)

  if (!employee){
      return res.status(404).send({error: "ID does not exist."})
    }
    res.send(employee)
})

router.route("/:id").delete(async (req,res)=>{
  const {id} = req.params.id

  if (id < 0 || Number.isInteger(id)){
    return res.status(400).send({error: "ID is not a valid number."})
    }

  const deletes = await deleteEmployee(id)

  if (!deletes){
      return res.status(404).send({error: "Employee does not exist."})
    }
    
    res.sendStatus(204)
})


router.route("/:id").put(async (req,res)=>{
    const {id} = req.params.id
    if(!req.body){
      return res.status(400).send({error: "Missing req. body"})
    }
    const {name, birthday, salary} = req.body
    
    if( !name || !birthday || !salary)
      return res.status(400).send({error: "Missing required fields."})

    if (!Number.isInteger(id) && id <0){
      return res.status(400).send({error: "Fix your id."})
    }

    const employee = await getEmployee(id)
    if(!employee){
      return res.status(404).send({error: "Employee not found."})
    }

    const updated = await updateEmployee({id, name, birthday, salary})
    res.send(updated)

})
