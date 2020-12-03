USE ReposteriaExamen
GO

CREATE VIEW VistaPrecioDistinto
AS
SELECT nombre_producto, i.precio, precio_sugerido  FROM producto p 
INNER JOIN inventario i ON i.producto_ = p.id_producto
INNER JOIN ordenProductos o ON i.producto_ = o.id_producto
WHERE precio != precio_sugerido
GO


