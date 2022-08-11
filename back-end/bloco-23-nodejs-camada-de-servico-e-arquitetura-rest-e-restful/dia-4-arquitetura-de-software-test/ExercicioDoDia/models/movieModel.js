const connection = require('./connection');

const create = async ({
  title,
  directedBy,
  releaseYear
}) => {
  const [result] = await connection
    .execute(
      'INSERT INTO model_example.movies (title, directed_by, release_year) VALUES (?, ?, ?)',
      [title, directedBy, releaseYear],
    );

  return {
    id: result.insertId,
  };
};

const getById = async (id) => {
  const [result] = await connection
    .execute(
      'SELECT * FROM model_example.movies WHERE id = ?',
      [id],
    );
    if(result.length === 0) return null;
    const { title, directed_by: directedBy, release_year: releaseYear } = result[0];
    return {
      id,
      title,
      directedBy,
      releaseYear,
    };
}

module.exports = {
  create,
  getById,
};