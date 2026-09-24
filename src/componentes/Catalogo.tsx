import { useEffect, useState } from 'react'

export interface ProductoItem {
  id: string;
  codigo: string;
  foto: string;
  nombre: string;
  categoria: string;
  descripcion: string;
  precio: number;
}

export const DATA_PRODUCTOS: ProductoItem[] = [
  {
    id: "p1",
    codigo: "LMB-001",
    foto: "/productos/mesa_roble_rustica.png",
    nombre: "Mesa Comedor de Roble Rústica",
    categoria: "Muebles de Interior",
    descripcion: "Mesa familiar tallada en roble macizo con tratamiento antihumedad y acabado satinado ecológico.",
    precio: 1250.00
  },
  {
    id: "p2",
    codigo: "LMB-002",
    foto: "/productos/silla_pino_ergonomica.png",
    nombre: "Silla de Pino Ergonomía Artesanal",
    categoria: "Sillas y Bancos",
    descripcion: "Ensamblada a mano con encajes de espiga y sellado de cera de abeja para alta durabilidad.",
    precio: 320.00
  },
  {
    id: "p3",
    codigo: "LMB-003",
    foto: "/productos/estanteria_modular.png",
    nombre: "Estantería Modular en Cedro",
    categoria: "Almacenamiento",
    descripcion: "Librero de alta resistencia con divisiones regulables y acabado mate natural para oficinas o salas.",
    precio: 890.00
  },
  {
    id: "p4",
    codigo: "LMB-004",
    foto: "/productos/puerta_caoba_tallada.png",
    nombre: "Puerta Principal de Caoba Tallada",
    categoria: "Aberturas y Puertas",
    descripcion: "Puerta maciza de seguridad con molduras en relieve y protección para rayos UV de exterior.",
    precio: 2150.00
  },
  {
    id: "p5",
    codigo: "LMB-005",
    foto: "/productos/mueble_bano_flotante.png",
    nombre: "Mueble de Baño Flotante en Teca",
    categoria: "Muebles de Baño",
    descripcion: "Estructura suspendida con tratamiento hidrófugo diseñado para soportar vapor y salpicaduras.",
    precio: 740.00
  },
  {
    id: "p6",
    codigo: "LMB-006",
    foto: "/productos/cama_king_nogal.png",
    nombre: "Juego de Cama King en Nogal",
    categoria: "Dormitorio",
    descripcion: "Cabecera y bastidor robusto de nogal oscuro con terminaciones pulidas a mano.",
    precio: 3100.00
  },
  {
    id: "p7",
    codigo: "LMB-007",
    foto: "/productos/pergola_jardin_roble.png",
    nombre: "Pérgola Modulada para Jardín",
    categoria: "Estructuras Exterior",
    descripcion: "Estructura exterior en vigas tratadas en autoclave para alta durabilidad a la intemperie.",
    precio: 4500.00
  },
  {
    id: "p8",
    codigo: "LMB-008",
    foto: "/productos/escritorio_ejecutivo.png",
    nombre: "Escritorio Ejecutivo Minimalista",
    categoria: "Oficina",
    descripcion: "Superficie amplia en madera de haya con pasacables ocultos y cajonería de cierre suave.",
    precio: 1420.00
  },
  {
    id: "p9",
    codigo: "LMB-009",
    foto: "/productos/banco_trabajo_taller.png",
    nombre: "Banco de Trabajo Reforzado",
    categoria: "Equipamiento Taller",
    descripcion: "Mesa pesada para taller de ebanistería con prensas de sujeción e hileras laterales.",
    precio: 980.00
  },
  {
    id: "p10",
    codigo: "LMB-010",
    foto: "/productos/consola_recibidora_cedro.png",
    nombre: "Consola Recibidora en Cedro",
    categoria: "Muebles de Interior",
    descripcion: "Diseño esbelto ideal para pasillos o vestíbulos con patas torneadas y cajón central.",
    precio: 650.00
  },
  {
    id: "p11",
    codigo: "LMB-011",
    foto: "/productos/perchero_pie_arbol.png",
    nombre: "Perchero de Pie Escultural",
    categoria: "Accesorios Decorativos",
    descripcion: "Accesorios de carpintería fina tallado a partir de una sola pieza estilizada de fresno.",
    precio: 280.00
  },
  {
    id: "p12",
    codigo: "LMB-012",
    foto: "/productos/mesa_centro_rodaja_tronco.png",
    nombre: "Mesa de Centro en Rodaja Rústica",
    categoria: "Muebles de Interior",
    descripcion: "Corte transversal de tronco con vetas naturales a la vista y sellado con resina epóxica.",
    precio: 520.00
  }
];

const API_URL = "https://tu-usuario.alwaysdata.net/api/productos";

export const Catalogo = () => {
  const [productos, setProductos] = useState<ProductoItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [vistaTabla, setVistaTabla] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setProductos(data);
        setLoading(false);
      })
      .catch(() => {
        const data = DATA_PRODUCTOS.map(e => e)
        setProductos(data);
        setLoading(false);
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
        <div className="mt-4 md:mt-0 flex bg-gray-200 p-1 rounded">
          <button 
            onClick={() => setVistaTabla(false)}
            className={`px-5 py-2 text-xs font-bold uppercase rounded transition ${!vistaTabla ? 'bg-lumbert-green text-white shadow' : 'text-gray-700'}`}
          >
            Vista Cards
          </button>
          <button 
            onClick={() => setVistaTabla(true)}
            className={`px-5 py-2 text-xs font-bold uppercase rounded transition ${vistaTabla ? 'bg-lumbert-green text-white shadow' : 'text-gray-700'}`}
          >
            Vista Tabla (Evaluación)
          </button>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-20 text-lumbert-green font-bold">Cargando datos del Web Service...</div>
      ) : vistaTabla ? (
        /* TABLA DE 6 COLUMNAS CON ESTILO LUMBERT */
        <div className="overflow-x-auto border border-lumbert-border rounded-lg shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-lumbert-green text-white text-xs uppercase tracking-wider">
              <tr>
                <th className="p-4">Foto</th>
                <th className="p-4">Código</th>
                <th className="p-4">Producto</th>
                <th className="p-4">Categoría</th>
                <th className="p-4">Descripción Breve</th>
                <th className="p-4">Precio</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-lumbert-border bg-white">
              {productos.map((prod) => (
                <tr key={prod.id} className="hover:bg-lumbert-paper transition">
                  <td className="p-3">
                    <img src={prod.foto} alt={prod.nombre} className="w-16 h-12 object-cover rounded border" />
                  </td>
                  <td className="p-4 font-mono font-bold text-lumbert-wood">{prod.codigo}</td>
                  <td className="p-4 font-bold text-lumbert-green">{prod.nombre}</td>
                  <td className="p-4">
                    <span className="bg-lumbert-paper text-lumbert-green px-2.5 py-1 rounded text-xs font-bold border border-lumbert-border">
                      {prod.categoria}
                    </span>
                  </td>
                  <td className="p-4 text-gray-600 text-xs max-w-xs">{prod.descripcion}</td>
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
            <div key={prod.id} className="bg-white border border-lumbert-border rounded overflow-hidden shadow-sm hover:shadow-md transition">
              <img src={prod.foto} alt={prod.nombre} className="w-full h-48 object-cover" />
              <div className="p-5 space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-lumbert-amber font-bold">{prod.categoria}</span>
                  <span className="text-gray-400 font-mono">{prod.codigo}</span>
                </div>
                <h3 className="font-bold text-lumbert-green text-lg">{prod.nombre}</h3>
                <p className="text-gray-600 text-xs line-clamp-2">{prod.descripcion}</p>
                <div className="pt-3 border-t border-lumbert-border flex justify-between items-center">
                  <span className="text-lg font-black text-lumbert-amber">{prod.precio}</span>
                  <button className="bg-lumbert-green hover:bg-lumbert-green-dark text-white text-xs px-3 py-1.5 rounded font-bold">
                    Detalles
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
