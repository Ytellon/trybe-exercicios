USE pixar;

SELECT 
    t.name,
    t.location,
    m.title,
    m.director,
    m.year,
    m.length_minutes
FROM
    theater t
        LEFT JOIN
    movies m ON m.theater_id = t.id
ORDER BY t.name;