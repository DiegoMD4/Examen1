USE ReposteriaExamen
GO


CREATE VIEW ClientesRegulares
AS

SELECT nombre_cliente, limitecredito, fecha_abono, monto as abono FROM cliente c
INNER JOIN abono a ON c.id_cliente = a.idcredito

GO


