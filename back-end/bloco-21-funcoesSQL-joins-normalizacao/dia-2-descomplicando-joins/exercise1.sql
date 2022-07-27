USE pixar;

SELECT 
    m.title, bo.domestic_sales, bo.international_sales
FROM
    movies m
        JOIN
    box_office bo ON bo.movie_id = m.id;