USE pixar;

SELECT 
    t.name,
    t.location,
    m.title,
    m.director,
    m.year,
    m.length_minutes
FROM
    movies m
        RIGHT JOIN
    theater t ON m.theater_id = t.id
ORDER BY t.name;