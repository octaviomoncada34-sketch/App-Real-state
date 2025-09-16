# 🚀 Guía de Despliegue

Esta guía proporciona los pasos para desplegar la aplicación "Real State" en Firebase App Hosting.

## Prerrequisitos

1.  **Node.js y npm**: Asegúrate de tener Node.js (versión 20 o superior) y npm instalados.
2.  **Firebase CLI**: Debes tener la Interfaz de Línea de Comandos (CLI) de Firebase. Si no la tienes, instálala globalmente:
    ```bash
    npm install -g firebase-tools
    ```
3.  **Cuenta de Firebase**: Necesitas una cuenta de Firebase y un proyecto de Firebase creado.

## Pasos para el Despliegue

### 1. Iniciar Sesión en Firebase

Abre tu terminal y autentícate con tu cuenta de Google asociada a Firebase:

```bash
firebase login
```

### 2. Configurar el Proyecto

Si es la primera vez que despliegas este proyecto, necesitas asociarlo con tu proyecto de Firebase.

```bash
firebase init hosting
```

Cuando se te pregunte:
- **Selecciona tu proyecto de Firebase**: Elige el proyecto que creaste para esta aplicación.
- **Directorio público**: Escribe `.next`. Next.js genera el build de producción en este directorio.
- **¿Configurar como una aplicación de una sola página (SPA)?**: Responde **No (n)**.
- **¿Configurar compilaciones y despliegues automáticos con GitHub?**: Responde **No (n)** por ahora si deseas desplegar manualmente.

Esto creará un archivo `firebase.json` que configurará el despliegue.

### 3. Construir la Aplicación para Producción

Antes de desplegar, necesitas generar la versión de producción de tu aplicación Next.js. Este comando compila y optimiza el código.

```bash
npm run build
```

### 4. Desplegar en Firebase

Una vez que la construcción (`build`) se haya completado sin errores, puedes desplegar la aplicación en Firebase App Hosting con el siguiente comando:

```bash
firebase deploy --only hosting
```

Firebase CLI subirá los archivos de tu build al servidor y te proporcionará una URL donde tu aplicación estará disponible públicamente.

### Resumen de Comandos

```bash
# 1. Instalar dependencias (solo la primera vez)
npm install

# 2. Construir el proyecto para producción
npm run build

# 3. Desplegar en Firebase
firebase deploy --only hosting
```

¡Y eso es todo! Tu aplicación estará en vivo en la URL de hosting que Firebase te proporcione.
