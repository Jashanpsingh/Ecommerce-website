import React from "react"

const Catg = () => {
  const data = [
    {
      cateImg: "./images/category/cat-1.jpg",
      cateName: "Apple",
    },
    {
      cateImg: "./images/category/cat-2.jpg",
      cateName: "Samasung",
    },
    {
      cateImg: "./images/category/cat-3.jpg",
      cateName: "Oppo",
    },
    {
      cateImg: "./images/category/cat-4.jpg",
      cateName: "Vivo",
    },
    {
      cateImg: "./images/category/cat-5.jpg",
      cateName: "Redimi",
    },
    {
      cateImg: "./images/category/cat-6.jpg",
      cateName: "Sony",
    },
  ]
  return (
    <>
      <div className='category'>
        <div className='chead d_flex'>
          <h1>Brands </h1>
          <h1><a href="#">Shops </a></h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
        <div className='box box2'>
          <button><a href="#">View All Brands</a></button>
        </div>
      </div>
    </>
  )
}

export default Catg
