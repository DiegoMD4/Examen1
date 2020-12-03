use ReposteriaExamen
go

INSERT INTO categoria
([nombre_categoria])
VALUES
('Carnes'),
('Limpieza'),
('Ganos'),
('Verduras'),
('Cereales'),
('Golosinas'),
('Pan'),
('Lacteos'),
('Utiles Escolares'),
('Medicina')
GO
----------------------------

INSERT INTO producto
([nombre_producto], [categoriaId])
VALUES
('Carne de vaca', 1),
('Jabon antibacterial',2),
('Frijoles', 3),
('Tomates', 4),
('CornFlakes chocolate', 5),
('Confites',6),
('Pan Blanco', 7),
('Leche Pura', 8),
('Cuadernos', 9),
('Panadol', 10)

GO
-------------------------
INSERT INTO cliente
([nombre_cliente], [limitecredito])
VALUES
('Alex',100.00),
('Angie',22.00),
('Taylor', 3.14),
('Roberto', 24.00),
('Xiomara',50.00),
('Dennis',40.80),
('Sayda', 200.00),
('Ingrid', 700.20),
('James', 390.00),
('Ingrid', 10.10)

GO

INSERT INTO venta
([id_cliente], [fecha])
VALUES
(1,'11-30-2020'),
(2,'2-11-2020'),
(3,'10-1-2020'),
(4,'9-30-2020'),
(5,'11-4-2020'),
(6,'2-1-2020'),
(7,'6-1-2020'),
(8,'4-12-2020'),
(9,'12-30-2020'),
(10, '8-10-2020')

GO
---------------------------

INSERT INTO credito
([id_cliente], [ventaid_], [estado])
VALUES
(1, 1, 0),
(2, 2 , 1),
(3, 3, 1),
(4, 4, 0),
(5, 5, 0),
(6, 6 , 1),
(7, 7, 1),
(8, 8, 1),
(9, 9, 0),
(10,10 , 1)


GO
------------------------------
INSERT INTO detalle_venta
([venta_id], [id_producto], [cantidad] )
VALUES
(1, 1, 200),
(2, 2, 10),
(3, 3, 400),
(4, 4, 1000),
(5, 5, 35),
(6, 6, 1453),
(7, 7, 475),
(8, 8, 1076),
(9, 9, 475),
(10, 10, 3646)

GO
-----------------------------

INSERT INTO abono
([fecha_abono], [idcredito], [monto] )
VALUES
('11-30-2020', 1, 230.00),        
('11-23-2020', 2, 10.00),        
('10-1-2020', 3, 150.00),
('9-30-2020', 4, 900.00),
('11-4-2020', 5, 230.00),
('2-1-2020', 6, 84.00),
('6-1-2020', 7, 1450.00),
('4-12-2020', 8, 90.00),
('12-30-2020', 9, 2.00),
('8-10-2020', 10, 99.00)

GO
-----------------------------

INSERT INTO proveedores
([nombreProveedor], [observacion])
VALUES
('Carnes Thomas', 'Solo carne de vaca'),
('Protex','Diferentes aromas'),
('Finca Don Manuel', 'N/A'),
('Finca Don Ricardo', 'N/A'),
('Kellogs', 'Cada viernes pasa'),
('Dulces Diana','Le debe una bolsa'),
('Panaderia Popular', 'N/A'),
('Leyde', 'Devolucion de producto'),
('Quest ', 'Cuadernos defectuosos'),
('Panadol Cop', 'N/A')

GO
------------------------------

INSERT INTO ordenProveedores
([proveedorid], [fechaOrden], [fechaEntrega], [estadoOr], [cobroadicional] )
VALUES
(1, '11-1-2020', '11-12-2020', 1, 200.00),
(2, '11-30-2020', '12-1-2020', 0, 425.00),
(3, '8-10-2020', '4-11-2020', 1, 300.00),
(4, '5-8-2020', '5-18-2020', 1, 500.00),
(5, '1-11-2020', '10-12-2020', 1, 4530.00),
(6, '2-7-2020', '8-22-2020', 0, 689.00),
(7, '4-4-2020', '6-4-2020', 1, 900.00),
(8, '6-5-2020', '9-7-2020', 1, 780.00),
(9, '1-2-2020', '6-2-2020', 1, 299.00),
(10, '10-3-2020', '12-3-2020', 1, 4999.00)

GO
--------------------------------

INSERT INTO ordenProductos
([ordenid], [id_producto], [cantidadPro], [costo], [precio_sugerido] )
VALUES
(1, 1, 300, 1400, 70.50),
(2, 2, 430, 800, 30.00),
(3, 3, 8, 350, 22.40),
(4, 4, 10, 600, 5.90),
(5, 5, 40, 543, 70.50),
(6, 6, 890, 2000, 750.00),
(7, 7, 60, 800, 50.50),
(8, 8, 230, 445, 6.10),
(9, 9, 1000, 5200, 30.40),
(4, 4, 67, 460, 45.90)


GO
--------------------------------
INSERT INTO inventario
([producto_], [cantidad], [precio])
VALUES
(1, 20, 75.40),
(2, 47, 30.40),
(1, 5, 25.40),
(4, 7, 7.00),
(5, 230, 70.50),
(6, 90, 750.40),
(7, 242, 50.50),
(8, 467, 35.00),
(9, 5, 45.40),
(10, 286, 66.00)

GO


INSERT INTO Origen_Gasto
( 
 [Origen]
)
VALUES
('Casa'),
( 'Tienda')

GO

INSERT INTO Gasto_Consumos
(
 [Detalle_Gastos], [OrigenDelGasto], [Precio_Dinero]
)
VALUES
('Pago de telefono', 1 , 105),
('Pago de agua', 1, 200),
('Impuestos', 2, 590),
('Luz electrica', 2, 1800),
('Luz electrica', 1, 500),
('Pollo para cena', 1, 70),
('Refrescos para cena', 1, 30),
('Alquiler de refrigeradores', 2, 930),
('Pago Telefono', 2, 200),
('Velas para casa', 1, 15)
GO