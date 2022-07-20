USE hr;

SELECT job_id, AVG(salary) AS 'average_salary' FROM employees
GROUP BY job_id ORDER BY `average_salary` DESC;