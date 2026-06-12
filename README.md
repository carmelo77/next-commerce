# E-Commerce Básico (Next.js & TypeScript)

E-commerce básico creado con Next.js y TypeScript para practicar Server-Side Rendering (SSR), Client-Side Rendering (CSR), Server Actions, y más.

## Requisitos Previos

- [Node.js](https://nodejs.org/) (versión recomendada LTS)
- [pnpm](https://pnpm.io/) (gestor de paquetes)
- [Docker](https://www.docker.com/) (para levantar la base de datos localmente)

## Nota sobre Prisma v7 y Driver Adapters

Este proyecto utiliza **Prisma v7**, el cual introduce una arquitectura libre de binarios Rust de manera predeterminada. Por este motivo, el cliente requiere obligatoriamente el uso de un **Driver Adapter** para conectarse a la base de datos PostgreSQL.

Para que funcione correctamente:
1. Se han instalado los paquetes `pg` y `@prisma/adapter-pg` en el proyecto.
2. El archivo de inicialización del cliente en [prisma/client.ts](file:///Users/pc/Documents/Next/next-commerce/prisma/client.ts) está configurado para instanciar un `Pool` de `pg` y pasar el adaptador `PrismaPg` a `new PrismaClient({ adapter })`.
3. Es obligatorio contar con la variable `DATABASE_URL` en el archivo `.env` para que el pool de conexiones funcione tanto en el servidor Next.js como en los scripts locales ejecutados con `ts-node` (ej. el script de seed).

## Pasos para la Configuración Inicial

Sigue estos pasos en orden para configurar y ejecutar el proyecto localmente:

### 1. Instalar Dependencias
Instala todos los paquetes requeridos por el proyecto:
```bash
pnpm install
```

### 2. Configurar Variables de Entorno
Copia el archivo de ejemplo `.env.example` y renómbralo a `.env`:
```bash
cp .env.example .env
```
Abre el archivo `.env` recién creado y ajusta la configuración de la base de datos si es necesario (por defecto viene configurada para funcionar con el contenedor de Docker).

### 3. Levantar Base de Datos
Inicia el contenedor de la base de datos Postgres usando Docker Compose:
```bash
docker-compose up -d
```

### 4. Ejecutar Migraciones de Prisma
Aplica las migraciones a la base de datos para crear las tablas necesarias:
```bash
pnpm prisma migrate dev
```

### 5. Generar Prisma Client
Genera el cliente de Prisma para obtener tipos y autocompletado en el proyecto:
```bash
pnpm prisma generate
```

### 6. Poblar la Base de Datos (Seed)
Ejecuta el script de seed para poblar la base de datos con categorías, productos e imágenes iniciales de prueba:
```bash
pnpm run seed
```

---

## Ejecución del Proyecto

### Desarrollo
Para iniciar el servidor de desarrollo local con recarga rápida:
```bash
pnpm run dev
```
Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

### Producción
Para compilar la aplicación y ejecutarla en modo producción:
```bash
pnpm run build
pnpm run start
```