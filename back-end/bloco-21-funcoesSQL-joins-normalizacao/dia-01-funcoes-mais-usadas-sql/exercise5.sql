USE hr;

SELECT MAX(salary), MIN(salary), SUM(salary), FORMAT(AVG(salary), 2)
FROM employees;