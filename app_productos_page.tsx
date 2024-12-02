import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Nuestros Productos',
  description: 'Explore nuestra gama de productos agroindustriales innovadores y sostenibles',
}

const products = [
  { id: 1, name: 'Tractor Agrícola Modelo X', description: 'Tractor de alta potencia para grandes extensiones de cultivo.' },
  { id: 2, name: 'Sistema de Riego Inteligente', description: 'Sistema de riego automatizado con control por aplicación móvil.' },
  { id: 3, name: 'Cosechadora Multifuncional', description: 'Cosechadora adaptable a diferentes tipos de cultivos.' },
  { id: 4, name: 'Dron de Monitoreo Agrícola', description: 'Dron equipado con cámaras y sensores para el monitoreo de cultivos.' },
  { id: 5, name: 'Invernadero Automatizado', description: 'Invernadero con control climático y de riego automatizado.' },
  { id: 6, name: 'Sembradora de Precisión', description: 'Sembradora con tecnología GPS para una siembra precisa y eficiente.' },
]

export default function Products() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">Nuestros Productos</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg overflow-hidden shadow-md">
            <Image src="/placeholder.svg" alt={product.name} width={400} height={300} className="w-full" />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <Link href={`/productos/${product.id}`} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
                Ver detalles
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

