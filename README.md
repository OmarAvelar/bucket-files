# bucket-files
Repo para descarga de Archivos de un S3 Bucket con Reactjs


# Gestor de Archivos de Amazon S3

Este proyecto te deja ver y bajar el último archivo que metiste al bucket de Amazon S3..

## Funcionalidades

- Muestra el nombre del último archivo añadido a un bucket de Amazon S3.
- Permite descargar el último archivo añadido desde el navegador.

## Instrucciones de Configuración

Antes de ejecutar la aplicación, necesitarás realizar algunas configuraciones.

### 1. Configuración de Amazon S3

Para permitir que la aplicación acceda a tus archivos en Amazon S3, sigue estos pasos:

1. Crea un bucket en Amazon S3 o selecciona uno existente.

2. Asegúrate de que el bucket tenga políticas de acceso adecuadas para permitir la lectura de objetos por parte del público. Puedes hacerlo agregando la siguiente política de bucket:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::TU_BUCKET/*"
    }
  ]
}
```

Configura las credenciales de acceso de AWS para que la aplicación pueda autenticarse con tu cuenta de AWS. Puedes obtener estas credenciales desde la consola de AWS o a través de IAM (Identity and Access Management).

2. Configuración de la Aplicación
Una vez que hayas configurado tu bucket de S3 y tus credenciales de AWS, sigue estos pasos:

Clona este repositorio en tu máquina local.
En el archivo S3FileManager.js, reemplaza 'YOUR_ACCESS_KEY_ID' y 'YOUR_SECRET_ACCESS_KEY' con tus propias credenciales de AWS.
En el mismo archivo, reemplaza 'mynewbucket-one' con el nombre de tu bucket de Amazon S3.

3. Ejecución de la Aplicación
Para ejecutar la aplicación, sigue estos pasos:

Abre una terminal y navega hasta el directorio del proyecto.
Ejecuta npm install para instalar las dependencias del proyecto.
Una vez que la instalación haya finalizado, ejecuta npm start para iniciar la aplicación.
La aplicación se abrirá automáticamente en tu navegador web predeterminado.