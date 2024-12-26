import { useNavigate } from "react-router-dom"

const HomeSectionCard = ({ product, keys }: { product: any, keys: any }) => {
  const navigate = useNavigate();
  console.log(keys)
  return (
    <>
      <div onClick={() => { navigate(`/product/${keys}`); console.log(keys) }} className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
        <div className="cursor-pointer m-2 border flex flex-col bg-white rounded-lg shadow-lg overflow-hidden items-center w-[15rem]">
          <div className="h-[13rem] w-[10rem]">
            <img className="object-cover object-top w-full h-full" src={product?.imageUrl} alt="" />
          </div>
          <div className="p-4">
            <h3 className="text-lg px-4 font-medium text-gray-900">{product?.brand}</h3>
            <p className="mt-2 text-sm text-gray-500">{product?.title}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeSectionCard
