import pandas as pd
from pymongo import MongoClient

# Ruta del conjunto de datos
ruta = "/home/vboxuser/proyecto_trafico/datos/trafico_limpio.parquet"

# Leer los datos
df = pd.read_parquet(ruta)

# Seleccionar campos relevantes
campos = [
    "Destination Port",
    "Flow Duration",
    "Total Fwd Packets",
    "Total Backward Packets",
    "Total Length of Fwd Packets",
    "Total Length of Bwd Packets",
    "Flow Bytes/s",
    "Flow Packets/s",
    "Label"
]

# Seleccionar los primeros 100 registros
df = df[campos].head(100)

# Limpiar valores no válidos
df = df.fillna(0)

# Convertir los registros a documentos
documentos = df.to_dict("records")

# Conectar con MongoDB
cliente = MongoClient("mongodb://localhost:27017/")
db = cliente["AnalisisTraficoRed"]
coleccion = db["flujos_red"]

# Insertar documentos
resultado = coleccion.insert_many(documentos)

print("Importación realizada correctamente")
print("Documentos insertados:", len(resultado.inserted_ids))

# Cerrar conexión
cliente.close()
