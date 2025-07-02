<?php

function registrarConsulta($con, $objetocontato)
{
    $fechadeaceptacion = date("Y-m-d H:i:s");

    $sql = "INSERT INTO contactos (nombres,apellidos,codigomedico,correo,especialidad,experiencia,telefono) VALUES(?,?,?,?,?,?,?);";
    $stmt = mysqli_prepare($con, $sql);
    mysqli_stmt_bind_param($stmt, "sssssis", $objetocontato['nombre'], $objetocontato['apellido'], $objetocontato['codigomedico'], $objetocontato['correo'], $objetocontato['especialidad'], $objetocontato['experiencia'], $objetocontato['telefono']);
    $result = mysqli_stmt_execute($stmt);
    return $result;
}

// Verify if receiving POST request with JSON
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Set response header as JSON
    header('Content-Type: application/json');

    // Decode received JSON
    $data = json_decode(file_get_contents("php://input"), true);
    if (json_last_error() !== JSON_ERROR_NONE) {
        echo json_encode(['error' => 'Invalid JSON']);
        exit;
    }

    // Validate received data    

    include_once('db.php');
    switch ($data['action']) {
        case 'generarConsulta':
            if (!$conexion) {
                echo json_encode(['error' => 'No se pudo conectar a la base de datos']);
                exit;
            }
            try {
                $response = registrarConsulta($conexion, $data);

                if ($response) {
                    echo json_encode(['success' => true, 'message' => 'consulta enviada exitosamente', 'id' => $conexion->insert_id]);
                } else {
                    echo json_encode(['success' => false, 'message' => 'consulta fallida']);
                }
            } catch (Exception $e) {
                echo json_encode(['error' => $e->getMessage()]);
            }
            break;

        default:
            echo json_encode(['success' => false]);
            break;
    }
}

?>