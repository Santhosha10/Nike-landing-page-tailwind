import React, { useState } from 'react';
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import { shoes, statistics } from "../constant";
import ShoeCard from "../components/ShoeCard";

const Hero = () => {

  const[bigShoeImg , setbigShoeImg] = useState(bigShoe1)

  return (
    <section id='home' className='w-full flex xl:flex-row justify-center min-h-screen gap-10 max-container'>
      <div className="relative w-full xl:w-2/5 flex flex-col justify-center items-start max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin text-[50px] max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 ">The New Arrival</span>
          <br />
          <span className='text-coral-red inline-block'>Super</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-xl leading-8 mt-6 mb-14 sm:max-w-sm">Discover Stylish arrivals, quality, comfort and innovation for your active life.</p>
        <Button label="Shop now" iconURL={arrowRight} />

        <div className="flex justify-starts items-start flex-wrap w-full  mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-2xl">{stat.value}</p>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative felx-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center  max-sm:hidden">
        <img
          src={bigShoeImg}
          alt="shoe-img"
          width={410}
          height={400}
          className="object-contain relative z-10"
        />
      </div>
      {shoes.length > 1 && (
        <div className="flex sm:gap-6 gap-4 absolute top-[12%] sm:left-[52%] max-sm:px-6 max-sm:hidden ">
          {shoes.map((shoe, index) => (
            <div key={index}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => { setbigShoeImg(shoe)}}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Hero;
