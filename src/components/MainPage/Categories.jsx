import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Apple Car",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Air port & wireless",
    },
    {
      cateImg: "./images/category/cat7.png",
      cateName: "Cables & Docks",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Cases & Films",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Charging Devices",
    },
    {
      cateImg: "./images/category/cat6.png",
      cateName: "Connected Home",
    },
    {
      cateImg: "./images/category/cat7.png",
      cateName: "Headphones",
    },
    {
      cateImg: "./images/category/cat8.png",
      cateName: "Watches",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Ipod's",
    },
    {
      cateImg: "./images/category/cat10.png",
      cateName: "Homepod mini",
    },
    {
      cateImg: "./images/category/cat11.png",
      cateName: "Apple camera",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
