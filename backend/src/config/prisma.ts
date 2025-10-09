import { PrismaClient } from "@prisma/client";

// Configuración de logs para depuración
const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"], // Habilitar logs detallados
  datasources: {
    db: {
      url: process.env.DATABASE_URL
    }
  }
});

// Función para cerrar conexiones
export const disconnectPrisma = async () => {
  await prisma.$disconnect();
};

export default prisma;
