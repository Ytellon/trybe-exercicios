-- Ufa! Por fim, faça uma query para exibir o número de vendas feitas entre o dia 15/04/2018 e o dia 30/07/2019.

SELECT COUNT(*) FROM PecasFornecedores.Vendas

WHERE DATE(order_date) BETWEEN '2018-04-15' AND '2019-07-30';