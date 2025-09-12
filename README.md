# Nombre del Proyecto

Descripción breve de tu aplicación React con TypeScript y Vite.

## 📋 Requisitos

- **Node.js**: versión 18 o 20
- **npm**: incluido con Node.js

## 🚀 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## 📝 Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo (Vite)
npm run build    # Construir para producción
npm run preview  # Previsualizar build de producción
npm run lint     # Ejecutar ESLint
npm run format   # Formatear código con Prettier
npm run test     # Ejecutar tests con Vitest
```

## 📁 Estructura de Carpetas

```
src/
├── components/     # Componentes reutilizables
├── pages/         # Páginas/vistas principales
├── hooks/         # Custom hooks
├── utils/         # Utilidades y helpers
├── types/         # Definiciones de TypeScript
├── styles/        # Estilos globales
└── assets/        # Imágenes, iconos, etc.
```

## 🔧 Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto:

```bash
# Las variables deben empezar con VITE_
VITE_API_URL=http://localhost:3000/api
VITE_APP_TITLE=Mi Aplicación
```

**Uso en el código:**
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
const appTitle = import.meta.env.VITE_APP_TITLE;
```

## 📦 Alias de Importación

El alias `@` está configurado para apuntar a `src/`:

```typescript
// En lugar de esto:
import Component from '../../components/Component'

// Puedes usar:
import Component from '@/components/Component'
```

## 🔧 Troubleshooting

### `import.meta.env.VITE_*` retorna `undefined`
- ✅ Asegúrate de que la variable empiece con `VITE_`
- ✅ Reinicia el servidor de desarrollo (`npm run dev`)

### El alias `@` no funciona
- ✅ Verifica la configuración en `tsconfig.json`:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```
- ✅ Verifica la configuración en `vite.config.ts`:
```typescript
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
```

### ESLint arroja muchos errores
- ✅ Ejecuta `npm run format` para formatear automáticamente
- ✅ Revisa las reglas en `.eslintrc.cjs`
- ✅ Considera desactivar reglas problemáticas temporalmente

### Build falla por errores de TypeScript
- ✅ Ejecuta `npx tsc --noEmit` para ver errores específicos
- ✅ Corrige los tipos antes del build

## 🚀 Extensiones Recomendadas

### Hooks de Pre-commit
```bash
# Instalar Husky
npm install --save-dev husky
npx husky install

# Agregar hook de pre-commit
npx husky add .husky/pre-commit "npm run lint && npm run format"
```

### Variables por Entorno
- `.env.development` - Variables para desarrollo
- `.env.production` - Variables para producción

