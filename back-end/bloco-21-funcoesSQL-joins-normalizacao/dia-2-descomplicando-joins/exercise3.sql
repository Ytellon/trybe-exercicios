USE pixar;

SELECT 
    m.title, bo.rating
FROM
    movies m
        JOIN
    box_office bo ON bo.movie_id = m.id
ORDER BY bo.rating DESC;