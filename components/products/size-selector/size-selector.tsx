import type { Size } from '@/interfaces'

interface Props {
    selectedSize: Size;
    availableSizes: Size[];
}

export const SizeSelector = ({ selectedSize, availableSizes }: Props) => {
  return (
    <div className='my-5'>
      <h3 className='font-bold mb-4'>Tallas disponibles</h3>
      <div className='flex'>
        {
          availableSizes.map(size => (
            <button
              key={size}
              className={`mx-2 px-4 py-2 border rounded-md ${selectedSize === size ? 'bg-blue-500 text-white' : 'border-gray-300'}`}
            >
              {size}
            </button>
          ))
        }
      </div>
    </div>
  )
}
