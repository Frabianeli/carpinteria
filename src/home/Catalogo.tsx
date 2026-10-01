import { useState } from 'react'
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query"
import { Card } from './Card';

export interface ProductoItem {
  id: string;
  nombre: string;
  categoria: string;
  descripcion: string;
  precio: number;
  stock: number;
  imagen: string;
}

const API_URL = "https://reneic.alwaysdata.net/productos";

const queryClient = new QueryClient()

const CatalogoScreen = () => {
  const [vistaTabla, setVistaTabla] = useState(false);

  const { data = [], isPending} = useQuery<ProductoItem[]>({
    queryKey: ["Productos"],
    queryFn: () => fetch(API_URL).then(res => res.json())
  })


  return (
    <section id="productos" className="py-24 px-6 max-w-7xl mx-auto min-h-[800px]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-lumbert-border pb-6">
        <div>
          <span className="text-lumbert-amber font-bold text-xs uppercase tracking-widest">Servicio Web AlwaysData</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-lumbert-green mt-1">Catálogo de Productos</h2>
        </div>

        <div className="mt-4 md:mt-0 flex bg-bg-dark p-1 rounded">
          <button 
            onClick={() => setVistaTabla(false)}
            className={`px-5 py-2 text-xs font-bold uppercase rounded transition text-white cursor-pointer ${!vistaTabla ? 'bg-primary shadow' : 'text-gray-700'}`}
          >
            Vista Cards
          </button>
          <button 
            onClick={() => setVistaTabla(true)}
            className={`px-5 py-2 text-xs font-bold uppercase rounded transition text-white cursor-pointer ${vistaTabla ? 'bg-primary  shadow' : 'text-gray-700'}`}
          >
            Vista Tabla
          </button>
        </div>
      </div>

      {isPending ? (
        <div className="text-center py-20 text-lumbert-green font-bold">Cargando datos del Web Service...</div>
      ) : 
      vistaTabla ? (
        <div className="border rounded-lg shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="text-white text-xs uppercase tracking-wider">
              <tr>
                <th className="p-4 font-bold text-black">Imagen</th>
                <th className="p-4 font-bold text-black">Nombre</th>
                <th className="p-4 font-bold text-black">Categoria</th>
                <th className="p-4 font-bold text-black">Descripcion</th>
                <th className="p-4 font-bold text-black">Stock</th>
                <th className="p-4 font-bold text-black">Precio</th>
              </tr>
            </thead>
            <tbody className="divide-y bg-white">
              {
                data.map((prod) => (
                  <tr key={prod.id} className=" transition">
                    <td className="p-3">
                      <img src={prod.imagen} alt={prod.nombre} className="w-16 h-12 object-cover rounded border" />
                    </td>
                    <td className="p-4 font-bold">{prod.nombre}</td>
                    <td className="p-4 font-bold">{prod.categoria}</td>
                    <td className="p-4 text-gray-600 text-xs max-w-xs">{prod.descripcion}</td>
                    <td className="p-4">
                      <span className="bg-lumbert-paper px-2.5 py-1 rounded text-xs font-bold border">
                        {prod.stock}
                      </span>
                    </td>
                    <td className="p-4 font-black">S/ {prod.precio}</td>
                  </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {
            data.map((prod) => (
              <Card key={prod.id} prod={prod}/>
            ))
          }
        </div>
      )}
    </section>
  );
}


export const Catalogo = () =>{
  return(
    <QueryClientProvider client={queryClient}>
      <CatalogoScreen/>
    </QueryClientProvider>
  )
}