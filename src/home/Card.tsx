
interface CardProps {
  prod: {
    id: string;
    nombre: string;
    categoria: string;
    descripcion: string;
    precio: number;
    stock: number;
    imagen: string;
  }
}

export const Card = ({ prod }: CardProps) => {
  return (
    <article key={prod.id} className="bg-white border border-lumbert-border rounded overflow-hidden shadow-sm hover:shadow-md transition">
        <img src={prod.imagen} alt={prod.nombre} className="w-full h-60 object-cover" />
        <div className="p-5 space-y-2">
        <div className="flex justify-between items-center text-xs">
            <span className="text-lumbert-amber font-bold">{prod.categoria}</span>
        </div>
        <h3 className="font-bold text-lumbert-green text-lg">{prod.nombre}</h3>
        <p className="text-gray-600 text-xs line-clamp-2">{prod.descripcion}</p>
        <div className="pt-3 border-t border-lumbert-border flex justify-between items-center">
            <span className="text-lg font-black text-lumbert-amber">S/ {prod.precio}</span>
            <button className="bg-lumbert-green hover:bg-lumbert-green-dark text-white text-xs px-3 py-1.5 rounded font-bold">
            Detalles
            </button>
        </div>
        </div>
    </article>
  )
}
