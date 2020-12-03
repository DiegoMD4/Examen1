use ReposteriaExamen
go

CREATE VIEW Transacciones
AS
SELECT nombre_cliente, cantidad monto FROM cliente c
INNER JOIN
detalle_venta d ON c.id_cliente = d.venta_id
GROUP BY nombre_cliente, cantidad
UNION 
SELECT nombreProveedor, costo monto FROM proveedores p 
INNER JOIN
ordenProductos o ON p.proveedorid = o.ordenid 
GROUP BY nombreProveedor, costo

GO

SELECT * FROM dbo.Transacciones 

SELECT DATEDIFF(DAY, fechaOrden, fechaEntrega) Dias, o.cantidadPro FROM ordenProveedores
INNER JOIN
ordenProductos o ON id_ordenproveedor = o.id_op
WHERE cantidadPro > 100 print 'Proveedores altos'

 