import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const productos = [
  { id: 1, nombre: "Camisa casual", precio: "$350", imagen: "https://via.placeholder.com/300x300?text=Camisa" },
  { id: 2, nombre: "Blusa formal", precio: "$420", imagen: "https://via.placeholder.com/300x300?text=Blusa" },
  { id: 3, nombre: "Jeans unisex", precio: "$499", imagen: "https://via.placeholder.com/300x300?text=Jeans" },
];

export default function HONDUMEX() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="bg-green-600 text-white p-4 text-center text-2xl font-bold">
        HONDUMEX
      </header>

      <section className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {productos.map((producto) => (
          <Card key={producto.id} className="rounded-2xl shadow-md">
            <img src={producto.imagen} alt={producto.nombre} className="rounded-t-2xl w-full h-64 object-cover" />
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">{producto.nombre}</h2>
              <p className="mb-4">Precio: {producto.precio}</p>
              <Button className="w-full bg-green-600 hover:bg-green-700">Agregar al carrito</Button>
            </CardContent>
          </Card>
        ))}
      </section>

      <footer className="bg-gray-100 text-center text-sm text-gray-500 p-4 mt-4">
        © 2025 HONDUMEX. Todos los derechos reservados.
      </footer>
    </div>
  );
}
