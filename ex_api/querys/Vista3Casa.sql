USE ReposteriaExamen
GO

CREATE VIEW ConsumoCasa
AS
    
    
SELECT Detalle_Gastos, Precio_Dinero FROM Gasto_consumos WHERE
OrigenDelGasto = 1

GO
