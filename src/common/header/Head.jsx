import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label> +91 9876543210</label>
            <i className='fa fa-envelope'></i>
            <label> support@iShop.com</label>
          </div>
          <div className='right row RText'>
            <label><a href="#">Theme FAQ"s</a></label>
            <label><a href="#">Need Help ?</a></label>
            <span>🏳️‍⚧️</span>
            <label>EN</label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
