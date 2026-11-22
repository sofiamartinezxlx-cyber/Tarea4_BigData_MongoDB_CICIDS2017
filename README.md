# Tarea 4 – Big Data: Almacenamiento y Consultas de Datos en MongoDB

## Descripción del proyecto

Este repositorio contiene el desarrollo práctico de la Tarea 4 del curso Big Data, dando continuidad al caso de estudio trabajado en la Tarea 3 con el conjunto de datos CICIDS2017.

El proyecto implementa una base de datos NoSQL utilizando MongoDB para almacenar, consultar, modificar, eliminar y analizar registros de tráfico de red.

## Caso de estudio

Se utiliza el conjunto de datos CICIDS2017, que contiene registros de tráfico de red clasificados en diferentes categorías, permitiendo realizar consultas y análisis orientados a identificar patrones de tráfico normal y actividad potencialmente maliciosa.

## Tecnologías utilizadas

- MongoDB
- MongoDB Shell (mongosh)
- Python
- PyMongo
- Conjunto de datos CICIDS2017

## Estructura del repositorio

```text
Tarea4_BigData_MongoDB_CICIDS2017/
│
├── scripts/
│   ├── importar_datos.py
│   └── consultas_mongodb.js
│
└── README.md
```

## Base de datos

**Nombre:** `AnalisisTraficoRed`

### Colecciones

- `flujos_red`: almacena los registros de tráfico de red del conjunto CICIDS2017.
- `categorias_trafico`: contiene información descriptiva de las categorías de tráfico analizadas.

## Operaciones desarrolladas

Se realizaron las siguientes operaciones en MongoDB:

- Importación de datos mediante Python y PyMongo.
- Consulta de documentos.
- Filtrado de registros mediante condiciones.
- Consultas utilizando operadores.
- Actualización de documentos.
- Eliminación de documentos.
- Conteo de registros.
- Consultas de valores distintos.
- Agrupación y cálculo de cantidades.
- Cálculo de promedios.
- Cálculo de sumas.
- Relación entre colecciones mediante `$lookup`.

## Scripts

### `importar_datos.py`

Script desarrollado en Python para procesar los datos seleccionados del conjunto CICIDS2017 e insertarlos en la colección `flujos_red` de MongoDB.

### `consultas_mongodb.js`

Contiene las consultas utilizadas durante el desarrollo de la práctica para demostrar las operaciones de manipulación y análisis de datos en MongoDB.

## Resultados

La implementación permitió crear y utilizar una base de datos NoSQL para almacenar registros de tráfico de red y ejecutar diferentes consultas que facilitan su exploración y análisis.

El desarrollo permitió aplicar los conceptos de bases de datos documentales, operaciones CRUD, filtros, agregaciones y relaciones entre colecciones.

## Autor
Proyecto académico desarrollado para la tarea 4 del curso Big Data - UNAD 
Carmen Herrera 

Proyecto académico desarrollado para la Tarea 4 del curso Big Data – UNAD.
s
