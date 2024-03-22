import PopularProductCard from "../components/PopularProductCard"
import { products } from "../constant"


const PopularProduct = () => {
  return (
    <section id="products" className='max-container max-sm:mt-2'>
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-3xl"><span className="text-coral-red">Popular</span> Product</h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">Experience top-notch quality and style with our sought-after selection. discover a world comfort, design and value.</p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-col-1 sm:gap-4 gap-14 ">
          {products.map((product)=>(
            <PopularProductCard key={product.name} {...product} />
          ))}
      </div>
    </section>
  )
}

export default PopularProduct