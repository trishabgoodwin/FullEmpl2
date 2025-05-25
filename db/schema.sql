DROP TABLE IF EXISTS employees;

CREATE TABLE employees(
    id SERIAL PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    birthday DATE,
    salary INTEGER
);

