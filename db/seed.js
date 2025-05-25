import db from "#db/client";
import { createEmployee } from "./queries/employees.js";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {

  await createEmployee({name:"Adam Adamson", birthday:"1990-01-08", salary:120000})
  await createEmployee({name:"Bob Bobson", birthday:"1987-01-27", salary:1})
  await createEmployee({name:"Carl Carson", birthday:"1987-06-04", salary:110200})
  await createEmployee({name:"Don Donson", birthday:"1980-07-23", salary:90000})
  await createEmployee({name:"Eric Ericson", birthday:"1992-01-28", salary:50000})
  await createEmployee({name:"Fred Fredson", birthday:"1965-09-18", salary:30000})
  await createEmployee({name:"George Georgeson", birthday:"1973-11-13", salary:100000})
  await createEmployee({name:"Hank Hankson", birthday:"1983-01-05", salary:190000})
  await createEmployee({name:"Issac Isaacson", birthday:"1989-05-23", salary:320000})
  await createEmployee({name:"Jacob Jacobson", birthday:"1961-04-08", salary:120000})
}
