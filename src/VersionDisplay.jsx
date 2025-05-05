import { useState, useEffect } from 'react';
import './VersionDisplay.css';

/**
 * Componente que muestra la versión de la aplicación
 * Obtiene la versión desde la variable de entorno o mediante fetch al package.json
 */
function VersionDisplay() {
  const [version, setVersion] = useState('');

  useEffect(() => {
    // Primero intentamos obtener la versión desde la variable de entorno
    if (import.meta.env.VITE_APP_VERSION) {
      setVersion(import.meta.env.VITE_APP_VERSION);
      return;
    }

    // Si no está disponible, hacemos fetch al package.json
    fetch('/package.json')
      .then(response => response.json())
      .then(data => {
        setVersion(data.version);
      })
      .catch(error => {
        console.error('Error al cargar la versión:', error);
        setVersion('desconocida');
      });
  }, []);

  if (!version) {
    return null; // No mostrar nada mientras se carga
  }

  return <span>v{version}</span>;
}

export default VersionDisplay;