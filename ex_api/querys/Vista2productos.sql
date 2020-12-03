USE ReposteriaExamen
GO

-- Create the view in the specified schema
CREATE VIEW Vista2productos
AS
   SELECT p.nombre_producto, c.nombre_categoria, cantidad FROM producto p INNER
JOIN categoria c ON p.categoriaId = c.id_categoria INNER JOIN
detalle_venta d ON p.id_producto = d.id_producto 
   
GO

