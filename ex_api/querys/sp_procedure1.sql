use ReposteriaExamen
go


CREATE PROCEDURE NivelProveedores
@Cantidad INT,
@Dias INT
AS  
SELECT nombreProveedor AS Proveedor, DATEDIFF(DAY, fechaOrden, fechaEntrega) Intervalo_Entregas,
x.cantidadPro 
FROM proveedores p INNER JOIN
ordenProveedores o ON p.proveedorid = o.id_ordenproveedor 
INNER JOIN ordenProductos x ON x.ordenid = o.proveedorid 
WHERE cantidadPro > @Cantidad AND DATEDIFF(DAY, fechaOrden, fechaEntrega) > @Dias
ORDER BY cantidadPro DESC

GO
-- example to execute the stored procedure we just created
EXECUTE  NivelProveedores 0, 0 
GO