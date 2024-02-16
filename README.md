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



Configura las credenciales de AWS pa' que la app se pueda conectar a tu cuenta de Amazon. Las credenciales las puedes sacar de la consola de AWS o del IAM (Identity and Access Management).
2. La App
Cuando ya tengas todo en orden en Amazon S3 y tengas tus credenciales listas, sigue estos pasos:

Clona este repositorio a tu máquina.
Abre el archivo S3FileManager.js y cambia 'YOUR_ACCESS_KEY_ID' y 'YOUR_SECRET_ACCESS_KEY' con tus propias credenciales de AWS.
En ese mismo archivo, cambia 'mynewbucket-one' por el nombre de tu bucket de Amazon S3.
3. A Darle
Para echar a andar la app, sigue estos pasos:

Ábrete una terminal y ve a la carpeta del proyecto.
Echa a andar npm install pa' instalar todas las cosas que necesita la app.
Cuando ya haya terminado la instalación, tira el comando npm start pa' prender la aplicación.
La aplicación se abrirá en tu navegador favorito. ¡Así de fácil!