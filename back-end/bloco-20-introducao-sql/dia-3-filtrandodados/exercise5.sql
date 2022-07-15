-- Agora, faça uma consulta para exibir o número de empresas (fornecedores) que contém a letra F no código.

SELECT COUNT(*) FROM PecasFornecedores.Fornecedores

WHERE code LIKE '%F%';