import React from 'react'

export const TopBar = () => {
  return (
    <div className="bg-[#14221b] text-gray-300 text-xs py-2.5 px-4 hidden md:block border-b border-[#21352a]">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Info Contacto & Horario */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <span className="text-lumbert-amber">📍</span>
            <span>Av. Industrial 450, Sector Forestal, Lima</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-lumbert-amber">🕒</span>
            <span>Lun - Sáb: 8:00 AM - 6:00 PM</span>
          </div>
        </div>

        {/* Redes Sociales / Idioma */}
        <div className="flex items-center space-x-4">
          <span className="hover:text-lumbert-amber cursor-pointer transition">FB</span>
          <span className="hover:text-lumbert-amber cursor-pointer transition">IG</span>
          <span className="hover:text-lumbert-amber cursor-pointer transition">YT</span>
          <span className="border-l border-gray-700 pl-4 text-lumbert-amber font-semibold">ES</span>
        </div>
      </div>
    </div>
  );
}
