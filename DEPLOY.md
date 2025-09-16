# 🚀 Pasos para el Despliegue

Esta guía resume los comandos necesarios para desplegar la aplicación "Real State" en Firebase App Hosting.

### 1. Iniciar Sesión en Firebase

```bash
firebase login
```

### 2. Configurar el Proyecto (solo la primera vez)

```bash
firebase init hosting
```

- **Selecciona tu proyecto de Firebase**.
- **Directorio público**: `.next`
- **¿Configurar como SPA?**: `No (n)`
- **¿Configurar despliegues con GitHub?**: `No (n)`

### 3. Construir la Aplicación

```bash
npm run build
```

### 4. Desplegar en Firebase

```bash
firebase deploy --only hosting
```
