import React, { useState, useEffect } from 'react';
import AWS from 'aws-sdk';

const S3FileManager = () => {
  const [lastUpdatedObject, setLastUpdatedObject] = useState(null);

  useEffect(() => {
    fetchLastUpdatedObject();

    // Establece un temporizador para actualizar el último objeto cada 10 segundos
    const timer = setInterval(fetchLastUpdatedObject, 10000);

    return () => clearInterval(timer); // Limpiar el temporizador al desmontar el componente
  }, []);

  const fetchLastUpdatedObject = () => {
    // Configura el SDK de AWS con tus credenciales
    AWS.config.update({
      accessKeyId: 'YOUR_ACCESS_KEY_ID',
      secretAccessKey: 'YOUR_SECRET_ACCESS_KEY',
      region: 'us-east-1',
    });

    // Crea una instancia de S3
    const s3 = new AWS.S3();

    // Reemplaza 'your-bucket-name' con el nombre de tu bucket S3
    const bucketName = 'mynewbucket-one';

    // Lista los objetos en el bucket de S3
    s3.listObjects({ Bucket: bucketName }, (err, data) => {
      if (err) {
        console.error(err);
      } else {
        // Ordena los objetos basados en la marca de tiempo de la última modificación
        const sortedObjects = data.Contents.sort((a, b) => {
          return new Date(b.LastModified) - new Date(a.LastModified);
        });

        // Establece el último objeto actualizado
        if (sortedObjects.length > 0) {
          setLastUpdatedObject(sortedObjects[0]);
        }
      }
    });
  };

  const handleDownload = (key) => {
    // Crea una URL firmada para el objeto S3
    const s3 = new AWS.S3();
    const bucketName = 'mynewbucket-one';

    s3.getSignedUrl('getObject', {
      Bucket: bucketName,
      Key: key,
      Expires: 60, // Tiempo de expiración de la URL en segundos
    }, (err, url) => {
      if (err) {
        console.error(err);
      } else {
        // Abre la URL en una nueva pestaña/ventana para iniciar la descarga
        window.open(url, '_blank');
      }
    });
  };

  return (
    <div>
      <h2>S3 Bucket</h2>
      {lastUpdatedObject && (
        <div>
          <p>Archivo: {lastUpdatedObject.Key}</p>
          <button onClick={() => handleDownload(lastUpdatedObject.Key)}>Download</button>
        </div>
      )}
      {!lastUpdatedObject && (
        <p>No objects found in the bucket.</p>
      )}
    </div>
  );
};

export default S3FileManager;
