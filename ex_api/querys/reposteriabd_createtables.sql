USE ReposteriaExamen
go

CREATE TABLE categoria
(
    id_categoria INT NOT NULL IDENTITY (1,1), -- primary key column
    nombre_categoria [NVARCHAR](50) NOT NULL,
    CONSTRAINT pkcategoria PRIMARY KEY(id_categoria)
    -- specify more columns here
);
GO

CREATE TABLE producto
(
    id_producto INT NOT NULL IDENTITY (1,1), -- primary key column
    nombre_producto [NVARCHAR](100) NOT NULL,
    categoriaId int NOT NULL
    CONSTRAINT pkproductos PRIMARY KEY(id_producto),
    CONSTRAINT fkCategoriaproductos FOREIGN KEY(categoriaId) REFERENCES categoria(id_categoria)
    -- specify more columns here
);
GO

CREATE TABLE cliente
(
    id_cliente INT NOT NULL IDENTITY (1,1), -- primary key column
    nombre_cliente [NVARCHAR](50) NOT NULL,
    limitecredito FLOAT (7)
    CONSTRAINT pkcliente PRIMARY KEY(id_cliente)
    -- specify more columns here
);
GO

CREATE TABLE venta
(
    ventaid INT NOT NULL IDENTITY (1,1), -- primary key column
    id_cliente [NVARCHAR](50) NOT NULL,
    fecha DATE
    CONSTRAINT pkventa PRIMARY KEY(ventaid)
    -- specify more columns here
);
GO

CREATE TABLE credito
(
    id_credito INT NOT NULL IDENTITY (1,1), -- primary key column
    id_cliente INT NOT NULL,
    ventaid_ INT NOT NULL,
    estado BIT
    CONSTRAINT pkcredito PRIMARY KEY(id_credito),
    CONSTRAINT fkcredito_cliente FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente),
    CONSTRAINT fkventa_cliente FOREIGN KEY (ventaid_) REFERENCES venta(ventaid)
    -- specify more columns here
);
GO

CREATE TABLE detalle_venta
(
    detalleid INT NOT NULL IDENTITY (1,1), -- primary key column
    venta_id INT NOT NULL,
    id_producto INT NOT NULL,
    cantidad INT NOT NULL,
    CONSTRAINT pkdetalle_venta PRIMARY KEY(detalleid),
    CONSTRAINT fkventadetalle FOREIGN KEY (venta_id) REFERENCES cliente(id_cliente),
    CONSTRAINT fkventa_ FOREIGN KEY (venta_id) REFERENCES venta(ventaid)
    -- specify more columns here
);
GO

CREATE TABLE abono
(
    abonoid INT NOT NULL IDENTITY (1,1), -- primary key column
    fecha_abono DATE,
    idcredito INT NOT NULL,
    monto FLOAT (7),
    CONSTRAINT pkabono PRIMARY KEY(abonoid),
    CONSTRAINT fkcredito_abono FOREIGN KEY (idcredito) REFERENCES credito(id_credito)
    -- specify more columns here
);
GO
CREATE TABLE proveedores
(
    proveedorid INT NOT NULL IDENTITY (1,1), -- primary key column
    nombreProveedor NVARCHAR (255),
    observacion VARCHAR (255),
    CONSTRAINT pkproveedores PRIMARY KEY(proveedorid),
   
);
GO

CREATE TABLE ordenProveedores
(
    id_ordenproveedor INT NOT NULL IDENTITY (1,1), -- primary key column
    proveedorid int not NULL,
    fechaOrden DATE,
    fechaEntrega DATE,
    estadoOr bit,
    cobroadicional FLOAT (7),
    CONSTRAINT pkordenProveedores PRIMARY KEY(id_ordenproveedor),
    CONSTRAINT fkordenproveedor FOREIGN KEY (proveedorid) REFERENCES proveedores(proveedorid)
    -- specify more columns here
);
GO

CREATE TABLE ordenProductos
(
    id_op INT NOT NULL IDENTITY (1,1), -- primary key column
    ordenid int not NULL,
    id_producto INT NOT NULL,
    cantidadPro INT NOT NULL,
    costo FLOAT (7),
    precio_sugerido FLOAT(7),
    CONSTRAINT pkordenProductos PRIMARY KEY(id_op),
    CONSTRAINT fkordenProveedores FOREIGN KEY (ordenid) REFERENCES ordenProveedores(id_ordenproveedor)
    -- specify more columns here
);


CREATE TABLE inventario
(
    id_inventario INT NOT NULL IDENTITY (1,1), -- primary key column
    producto_ int not NULL,
    cantidad INT NOT NULL,
    precio FLOAT (6),
    CONSTRAINT pkordenProvee PRIMARY KEY(id_inventario),
    CONSTRAINT fkinvproduFOREIGN FOREIGN KEY (producto_) REFERENCES producto(id_producto)
    -- specify more columns here
);
GO

IF OBJECT_ID('SchemaName.TableName', 'U') IS NOT NULL
DROP TABLE SchemaName.TableName
GO

CREATE TABLE Origen_Gasto
(
   ID_ INT NOT NULL IDENTITY (1,1), 
   Origen NVARCHAR (20)
   CONSTRAINT pkOrigasto PRIMARY KEY (ID_)
  
);
GO 

CREATE TABLE Gasto_Consumos
(
    ID_Gastos INT NOT NULL IDENTITY(1,1), 
    Detalle_Gastos [NVARCHAR] (60),
    OrigenDelGasto INT NOT NULL,
    Precio_Dinero INT NOT NULL
    CONSTRAINT pkGastos PRIMARY KEY (ID_Gastos),
    CONSTRAINT fkOrigen FOREIGN KEY (OrigenDelGasto) REFERENCES Origen_Gasto(ID_)
);
GO



-- Create a new table called 'Reposteria' in schema 'rep'
-- Drop the table if it already exists
IF OBJECT_ID('SchemaName.Reposteria', 'U') IS NOT NULL
DROP TABLE TablaReposteria
GO
-- Create the table in the specified schema
CREATE TABLE TablaReposteria
(
    ReposteriaId INT NOT NULL IDENTITY,
    Pastel VARCHAR (50) NOT NULL,
    Precio INT NOT NULL
    
    CONSTRAINT pkrepos PRIMARY KEY (ReposteriaId)
    
);
GO





