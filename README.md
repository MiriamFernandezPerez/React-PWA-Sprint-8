# 🚀 React PWA Sprint 8

<img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" width="50"/>

Una **aplicación web progresiva (PWA)** construida con **React 18** utilizando **Create React App (CRA)**. Este proyecto forma parte de un sprint educativo enfocado en desarrollar habilidades en React y PWA.

---

## 📝 Descripción del proyecto

Esta aplicación es una **Single Page Application (SPA)** que aprovecha las capacidades de PWA para ofrecer una experiencia cercana a una app nativa: instalación en el dispositivo, carga rápida y offline.

- **Tecnologías principales:** React, react-scripts, web-vitals, Jest, Testing Library.
- **Objetivo:** Aprender y practicar conceptos avanzados de React y PWAs.
- **Alcance:** Implementación de la interfaz de usuario, monitoreo de rendimiento y pruebas unitarias.

---

## 📂 Estructura del proyecto

📦 react-pwa-sprint8/

├─ 📂 public/        # Activos estáticos y configuración PWA (manifest, icons)

├─ 📂 src/           # Código fuente React

│   ├─ 📄 App.js     # Componente principal

│   ├─ 📄 index.js   # Punto de entrada React

│   └─ 📄 setupTests.js # Configuración de pruebas

├─ 📄 package.json       # Dependencias y scripts

├─ 📄 package-lock.json  # Bloqueo de dependencias

└─ 📄 README.md          # Documentación del proyecto


---


### 🔹 Capas de arquitectura

| Capa               | Archivos                          | Responsabilidad                                               |
|-------------------|----------------------------------|---------------------------------------------------------------|
| Configuración      | package.json, package-lock.json   | Metadatos, dependencias, scripts, reglas de control de versiones |
| Activos estáticos  | public/                           | HTML, manifiesto PWA, íconos                                  |
| Solicitud          | src/                              | Interfaz y lógica de React                                     |
| Calidad            | setupTests.js, App.test.js        | Pruebas unitarias y monitoreo de rendimiento                  |

---

## ⚙️ Scripts disponibles

| Script             | Comando                    | Descripción                                   |
|------------------|----------------------------|-----------------------------------------------|
| Desarrollo        | `npm start`                | Lanza servidor con recarga automática        |
| Producción        | `npm run build`            | Genera paquete optimizado para producción    |
| Pruebas           | `npm test`                 | Ejecuta Jest en modo observación             |
| Eject             | `npm run eject`            | Expone la configuración interna de CRA       |

---

## 🛠 Tecnologías y dependencias

- **React & React DOM** – Componentes y manipulación del DOM
- **react-scripts** – Configuración cero para Webpack, Babel, ESLint, Jest
- **Testing Library** – Pruebas de componentes y DOM
- **web-vitals** – Medición de métricas de rendimiento (CLS, FID, LCP, FCP, TTFB)

---

## 🌐 Configuración de PWA

El proyecto está configurado como PWA mediante `public/manifest.json`:

- **Nombre:** Aplicación React
- **Mostrar:** autónomo
- **Color de tema:** #000000
- **Color de fondo:** #ffffff
- **Iconos:** 192x192px y 512x512px

Permite instalación en dispositivos y funcionamiento offline parcial.

---

## 🧪 Calidad y monitoreo

- **Pruebas:** `src/setupTests.js` y `src/App.test.js` con Jest y Testing Library.
- **Métricas de rendimiento:** `src/reportWebVitals.js` usando web-vitals.

---

## 🔄 Flujo de trabajo

1. Instalar dependencias:  
   ```bash
   npm install
   ```
2. niciar servidor de desarrollo:
  ```bash
  npm start
  ```

3. Editar código en src/ y ver cambios en tiempo real.

4. Ejecutar pruebas:
   ```bash
   npm test
   ```
5. Generar build de producción:
   ```bash
   npm run build
   ```

## 📖 Recursos

- [Documentación React](https://reactjs.org/)
- [Documentación Create React App](https://create-react-app.dev/)
- [PWA en CRA](https://create-react-app.dev/docs/making-a-progressive-web-app/)
- [Testing Library](https://testing-library.com/)

---

## ✨ Autor

**Miriam Fernández Pérez**

