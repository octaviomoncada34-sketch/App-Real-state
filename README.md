# Real Estate Manager - Sistema de Gestión Inmobiliaria

![Real Estate Manager](https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=300&fit=crop)

Una aplicación moderna de gestión inmobiliaria construida con **React**, **TypeScript** y **Arquitectura Limpia**, diseñada para mostrar y filtrar propiedades de manera eficiente y elegante.

## 🏗️ Arquitectura Limpia

Esta aplicación implementa los principios de **Clean Architecture** (Arquitectura Limpia) propuesta por Robert C. Martin, organizando el código en capas bien definidas con separación clara de responsabilidades.

### 📁 Estructura del Proyecto

```
src/
├── domain/                 # Capa de Dominio (Entidades y Casos de Uso)
│   ├── entities/          # Entidades del negocio
│   │   ├── Owner.ts
│   │   ├── Property.ts
│   │   ├── PropertyImage.ts
│   │   ├── PropertyTrace.ts
│   │   └── PropertyWithDetails.ts
│   ├── repositories/      # Interfaces de repositorios
│   │   └── PropertyRepository.ts
│   └── usecases/         # Casos de uso del negocio
│       ├── GetPropertiesUseCase.ts
│       └── GetPropertyDetailsUseCase.ts
├── application/           # Capa de Aplicación (Servicios)
│   └── services/
│       └── PropertyService.ts
├── infrastructure/        # Capa de Infraestructura (Implementaciones)
│   └── repositories/
│       └── MockPropertyRepository.ts
├── presentation/          # Capa de Presentación (UI Components)
│   ├── components/
│   │   ├── ui/           # Componentes de interfaz
│   │   └── layout/       # Componentes de layout
│   └── pages/            # Páginas principales
└── shared/               # Utilidades compartidas
    ├── utils/
        └── constants/
        ```

        ### 🎯 Principios Aplicados

        #### 1. **Separación por Capas**
        - **Domain**: Contiene la lógica de negocio pura, independiente de frameworks
        - **Application**: Orquesta los casos de uso y coordina entre capas
        - **Infrastructure**: Implementaciones concretas (APIs, base de datos, etc.)
        - **Presentation**: Interfaz de usuario y componentes React

        #### 2. **Inversión de Dependencias**
        - Las capas internas no dependen de las externas
        - Se usan interfaces para desacoplar implementaciones
        - Inyección de dependencias en los servicios

        #### 3. **Responsabilidad Única**
        - Cada clase/módulo tiene una única razón para cambiar
        - Separación clara entre lógica de negocio y presentación

        #### 4. **Principio Abierto/Cerrado**
        - Abierto para extensión, cerrado para modificación
        - Fácil agregar nuevas funcionalidades sin modificar código existente

        ## 🚀 Características Principales

        ### ✨ Funcionalidades
        - **📋 Lista de Propiedades**: Vista en grid responsive con información clave
        - **🔍 Filtros Avanzados**: Búsqueda por nombre, dirección y rango de precios  
        - **📱 Diseño Responsive**: Optimizado para dispositivos móviles y desktop
        - **📄 Vista Detallada**: Información completa de cada propiedad
        - **👤 Información del Propietario**: Datos del dueño de cada propiedad
        - **📊 Historial de Transacciones**: Seguimiento de ventas y movimientos

        ### 🎨 Diseño y UX
        - **🎨 Sistema de Diseño Cohesivo**: Colores, tipografías y espaciados consistentes
        - **🌟 Interfaz Moderna**: Diseño clean con gradientes y sombras elegantes
        - **⚡ Transiciones Suaves**: Animaciones y efectos visuales fluidos
        - **🔄 Estados de Carga**: Indicadores visuales durante las operaciones
        - **📱 Mobile First**: Diseñado primero para móviles, escalable a desktop

        ## 🛠️ Tecnologías Utilizadas

        ### Frontend
        - **React 18** - Biblioteca de interfaz de usuario
        - **TypeScript** - Tipado estático para JavaScript
        - **Vite** - Herramienta de construcción rápida
        - **Tailwind CSS** - Framework de CSS utilitario
        - **shadcn/ui** - Componentes de interfaz reutilizables
        - **Lucide React** - Iconos SVG

        ### Arquitectura y Patrones
        - **Clean Architecture** - Separación en capas bien definidas
        - **Repository Pattern** - Abstracción de acceso a datos
        - **Use Case Pattern** - Encapsulación de lógica de negocio
        - **Dependency Injection** - Inversión de control

        ### Herramientas de Desarrollo
        - **ESLint** - Linter para código JavaScript/TypeScript
        - **React Query** - Gestión de estado servidor
        - **React Router** - Enrutamiento declarativo

        ## 📊 Modelo de Datos

        La aplicación maneja las siguientes entidades principales:

        ### 🏠 Property (Propiedad)
        ```typescript
        interface Property {
          idProperty: string;
            name: string;
              address: string;
                price: number;
                  codeInternal: string;
                    year: number;
                      idOwner: string;
                        description?: string;
                          bedrooms?: number;
                            bathrooms?: number;
                              area?: number;
                              }
                              ```

                              ### 👤 Owner (Propietario)
                              ```typescript
                              interface Owner {
                                idOwner: string;
                                  name: string;
                                    address: string;
                                      photo?: string;
                                        birthday: Date;
                                        }
                                        ```

                                        ### 🖼️ PropertyImage (Imagen de Propiedad)
                                        ```typescript
                                        interface PropertyImage {
                                          idPropertyImage: string;
                                            idProperty: string;
                                              file: string;
                                                enabled: boolean;
                                                  isPrimary?: boolean;
                                                  }
                                                  ```

                                                  ### 📈 PropertyTrace (Historial de Propiedad)
                                                  ```typescript
                                                  interface PropertyTrace {
                                                    idPropertyTrace: string;
                                                      dateSale: Date;
                                                        name: string;
                                                          value: number;
                                                            tax: number;
                                                              idProperty: string;
                                                              }
                                                              ```

                                                              ## 🚀 Instalación y Configuración

                                                              ### Prerrequisitos
                                                              - Node.js (versión 16 o superior)
                                                              - npm o yarn

                                                              ### Pasos de Instalación

                                                              1. **Clonar el repositorio**
                                                              ```bash
                                                              git clone <repository-url>
                                                              cd real-estate-manager
                                                              ```

                                                              2. **Instalar dependencias**
                                                              ```bash
                                                              npm install
                                                              # o
                                                              yarn install
                                                              ```

                                                              3. **Iniciar el servidor de desarrollo**
                                                              ```bash
                                                              npm run dev
                                                              # o
                                                              yarn dev
                                                              ```

                                                              4. **Abrir en el navegador**
                                                              ```
                                                              http://localhost:8080
                                                              ```

                                                              ## 📱 Uso de la Aplicación

                                                              ### 🔍 Búsqueda y Filtros
                                                              1. **Búsqueda Rápida**: Utiliza el campo de búsqueda para encontrar propiedades por nombre o dirección
                                                              2. **Filtros por Precio**: Selecciona rangos predefinidos o establece límites personalizados
                                                              3. **Filtros Avanzados**: Accede a filtros adicionales como ciudad o barrio específico
                                                              4. **Limpiar Filtros**: Usa el botón "Limpiar" para resetear todos los filtros

                                                              ### 📄 Visualización de Propiedades
                                                              - **Vista en Grid**: Las propiedades se muestran en tarjetas con información clave
                                                              - **Detalles Completos**: Haz clic en "Ver Detalles" para información completa
                                                              - **Navegación**: Usa "Volver a la lista" para regresar a la vista principal

                                                              ### 📊 Información Mostrada
                                                              - Precio, ubicación y características básicas
                                                              - Fotos de la propiedad
                                                              - Información del propietario
                                                              - Historial de transacciones y movimientos

                                                              ## 🧪 Testing y Calidad

                                                              ### Principios de Testing
                                                              - **Unit Tests**: Para casos de uso y lógica de negocio
                                                              - **Integration Tests**: Para servicios y repositorios
                                                              - **Component Tests**: Para componentes React
                                                              - **E2E Tests**: Para flujos completos de usuario

                                                              ### Herramientas Recomendadas
                                                              - **Jest** - Framework de testing
                                                              - **React Testing Library** - Testing de componentes
                                                              - **MSW** - Mock de APIs
                                                              - **Cypress** - Testing end-to-end

                                                              ## 🔧 Configuración y Personalización

                                                              ### 🎨 Sistema de Diseño
                                                              El sistema de diseño está centralizado en:
                                                              - `src/index.css` - Variables CSS y tokens de diseño
                                                              - `tailwind.config.ts` - Configuración de Tailwind CSS

                                                              ### 🔧 Configuración de Capas
                                                              - **Domain Layer**: Independiente de frameworks
                                                              - **Application Layer**: Servicios de aplicación
                                                              - **Infrastructure Layer**: Implementaciones específicas
                                                              - **Presentation Layer**: Componentes React

                                                              ## 🚀 Despliegue

                                                              ### Construcción para Producción
                                                              ```bash
                                                              npm run build
                                                              ```

                                                              ### Variables de Entorno
                                                              Crea un archivo `.env` con las configuraciones necesarias:
                                                              ```env
                                                              VITE_API_URL=https://api.ejemplo.com
                                                              VITE_APP_NAME=Real Estate Manager
                                                              ```

                                                              ### Plataformas Recomendadas
                                                              - **Vercel** - Despliegue automático desde Git
                                                              - **Netlify** - Hosting estático con funciones
                                                              - **AWS S3 + CloudFront** - Solución escalable
                                                              - **Docker** - Containerización para cualquier plataforma

                                                              ## 🤝 Contribución

                                                              ### Guías de Desarrollo
                                                              1. **Seguir Clean Architecture**: Respetar la separación de capas
                                                              2. **Tipado Fuerte**: Usar TypeScript en todo el código
                                                              3. **Componentes Reutilizables**: Crear componentes modulares
                                                              4. **Testing**: Escribir tests para nueva funcionalidad
                                                              5. **Documentación**: Mantener la documentación actualizada

                                                              ### Flujo de Trabajo
                                                              1. Fork del repositorio
                                                              2. Crear rama feature: `git checkout -b feature/nueva-funcionalidad`
                                                              3. Commit cambios: `git commit -m 'Agregar nueva funcionalidad'`
                                                              4. Push a la rama: `git push origin feature/nueva-funcionalidad`
                                                              5. Crear Pull Request

                                                              ## 📝 Próximas Funcionalidades

                                                              ### 🔮 Roadmap
                                                              - [ ] **Autenticación de usuarios**
                                                              - [ ] **Favoritos y listas personalizadas**
                                                              - [ ] **Comparación de propiedades**
                                                              - [ ] **Mapa interactivo**
                                                              - [ ] **Calculadora de financiamiento**
                                                              - [ ] **Sistema de notificaciones**
                                                              - [ ] **Reportes y analytics**
                                                              - [ ] **API RESTful con .NET**
                                                              - [ ] **Base de datos MongoDB**
                                                              - [ ] **Tests automatizados**

                                                              ## 🐛 Reporte de Bugs

                                                              Si encuentras algún problema:
                                                              1. Verifica que no esté ya reportado en Issues
                                                              2. Crea un nuevo Issue con:
                                                                 - Descripción detallada del problema
                                                                    - Pasos para reproducirlo
                                                                       - Comportamiento esperado vs actual
                                                                          - Screenshots si es necesario
                                                                             - Información del entorno (OS, navegador, etc.)

                                                                             ## 📄 Licencia

                                                                             Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

                                                                             ## 👥 Equipo

                                                                             Desarrollado siguiendo las mejores prácticas de **Clean Architecture** y **Clean Code**.

                                                                             ---

                                                                             ### 🌟 ¿Te gusta el proyecto?

                                                                             Si este proyecto te ha sido útil, considera:
                                                                             - ⭐ Darle una estrella en GitHub
                                                                             - 🔗 Compartirlo con otros desarrolladores
                                                                             - 🐛 Reportar bugs o sugerir mejoras
                                                                             - 🤝 Contribuir con código o documentación

                                                                             ---

                                                                             **Real Estate Manager** - Gestión inmobiliaria moderna con arquitectura limpia 🏠✨