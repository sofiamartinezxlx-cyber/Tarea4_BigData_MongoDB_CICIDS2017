// ==========================================
// TAREA 4 - BIG DATA
// Consultas y operaciones en MongoDB
// Dataset: CICIDS2017
// ==========================================

// Seleccionar la base de datos
use AnalisisTraficoRed;

// 1. CONSULTA DE DOCUMENTOS
db.flujos_red.find().limit(5);

// 2. FILTRO POR TIPO DE TRAFICO
db.flujos_red.find({ Label: "BENIGN" }).limit(5);

// 3. FILTRO POR PUERTO DE DESTINO
db.flujos_red.find({ "Destination Port": 80 }).limit(5);

// 4. CONSULTA CON OPERADOR $GT
db.flujos_red.find({
    "Total Fwd Packets": { $gt: 5 }
}).limit(5);

// 5. CONSULTA DE TRAFICO FTP-PATATOR
db.flujos_red.find({
    Label: "FTP-Patator"
}).limit(5);

// 6. ACTUALIZACION DE UN DOCUMENTO
db.flujos_red.updateOne(
    { "Destination Port": 80 },
    {
        $set: {
            observacion: "Registro actualizado para demostrar la operación de modificación"
        }
    }
);

// 7. VERIFICAR ACTUALIZACION
db.flujos_red.find(
    { observacion: { $exists: true } }
);

// 8. ELIMINACION DE UN DOCUMENTO
db.flujos_red.deleteOne({
    "Destination Port": 1133
});

// 9. CONTAR TODOS LOS DOCUMENTOS
db.flujos_red.countDocuments();

// 10. CONTAR TRAFICO BENIGNO
db.flujos_red.countDocuments({
    Label: "BENIGN"
});

// 11. CONTAR TRAFICO FTP-PATATOR
db.flujos_red.countDocuments({
    Label: "FTP-Patator"
});

// 12. CONSULTAR CATEGORIAS
db.categorias_trafico.find();

// 13. AGRUPAR DOCUMENTOS POR ETIQUETA
db.flujos_red.aggregate([
    {
        $group: {
            _id: "$Label",
            total: { $sum: 1 }
        }
    }
]);

// 14. CALCULAR PROMEDIO DE DURACION
db.flujos_red.aggregate([
    {
        $group: {
            _id: null,
            promedio_duracion: {
                $avg: "$Flow Duration"
            }
        }
    }
]);

// 15. CALCULAR SUMA DE PAQUETES
db.flujos_red.aggregate([
    {
        $group: {
            _id: null,
            suma_paquetes: {
                $sum: "$Total Fwd Packets"
            }
        }
    }
]);

// 16. CONSULTA CON RELACION ENTRE COLECCIONES
db.flujos_red.aggregate([
    {
        $lookup: {
            from: "categorias_trafico",
            localField: "Label",
            foreignField: "Label",
            as: "informacion_categoria"
        }
    },
    {
        $limit: 5
    }
]);
