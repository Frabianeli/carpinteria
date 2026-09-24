import { useEffect, useState } from 'react'
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

const Catalogo2 = () => {
  const [productos, setProductos] = useState<ProductoItem[]>([]);
  const [vistaTabla, setVistaTabla] = useState(false);


  const { data = [], isPending} = useQuery<ProductoItem[]>({
    queryKey: ["Productos"],
    queryFn: () => fetch(API_URL).then(res => res.json())
  })


  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setProductos(data);
      })
      .catch(() => {
        setProductos(data);
      });
  }, []);

  return (
    <section id="catalogo" className="py-24 px-6 max-w-7xl mx-auto min-h-[800px]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-lumbert-border pb-6">
        <div>
          <span className="text-lumbert-amber font-bold text-xs uppercase tracking-widest">Servicio Web AlwaysData</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-lumbert-green mt-1">Catálogo de Productos</h2>
        </div>

        {/* Botones Switch Vista (Card / Tabla) */}
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
      ) : vistaTabla ? (
        /* TABLA DE 6 COLUMNAS CON ESTILO LUMBERT */
        <div className="overflow-x-auto border border-lumbert-border rounded-lg shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-lumbert-green text-white text-xs uppercase tracking-wider">
              <tr>
                <th className="p-4">ID</th>
                <th className="p-4">Nombre</th>
                <th className="p-4">Categoria</th>
                <th className="p-4">Descripcion</th>
                <th className="p-4">Stock</th>
                <th className="p-4">Precio</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-lumbert-border bg-white">
              {productos.map((prod) => (
                <tr key={prod.id} className="hover:bg-lumbert-paper transition">
                  <td className="p-3">
                    <img src={prod.imagen} alt={prod.nombre} className="w-16 h-12 object-cover rounded border" />
                  </td>
                  <td className="p-4 font-mono font-bold text-lumbert-wood">{prod.nombre}</td>
                  <td className="p-4 font-bold text-lumbert-green">{prod.categoria}</td>
                  <td className="p-4 text-gray-600 text-xs max-w-xs">{prod.descripcion}</td>
                  <td className="p-4">
                    <span className="bg-lumbert-paper text-lumbert-green px-2.5 py-1 rounded text-xs font-bold border border-lumbert-border">
                      {prod.stock}
                    </span>
                  </td>
                  <td className="p-4 font-black text-lumbert-amber">{prod.precio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        /* CARDS GRID DE 12 PRODUCTOS */
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {productos.map((prod) => (
            <Card key={prod.id} prod={prod}/>
          ))}
        </div>
      )}
    </section>
  );
}


export const Catalogo = () =>{
  return(
    <QueryClientProvider client={queryClient}>
      <Catalogo2/>
    </QueryClientProvider>
  )
}