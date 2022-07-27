USE pixar;

SELECT 
    t.name,
    t.location,
    m.title,
    m.director,
    m.year,
    m.length_minutes,
    bo.rating
FROM
    theater t
		JOIN
    movies m ON m.theater_id = t.id
		JOIN
	box_office bo ON m.id = bo.movie_id
WHERE bo.rating > 8
ORDER BY t.name;