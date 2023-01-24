import React from 'react'
import img from '../../../../images/user.webp'
const Discover = () => {
  return (
    <div className='discover'>
      <h1 className='ml-1 '>Discover</h1>
      <div className="row">
      <div className="card">
  <div className="card__img">
    <img src={img} alt="" />
  </div>
  <h6>Name album</h6>
  <p>category</p>
</div>
<div className="card">
  <div className="card__img">
    <img src={img} alt="" />
  </div>
  <h6>Name album</h6>
  <p>category</p>
</div><div className="card">
  <div className="card__img">
    <img src={img} alt="" />
  </div>
  <h6>Name album</h6>
  <p>category</p>
</div><div className="card">
  <div className="card__img">
    <img src={img} alt="" />
  </div>
  <h6>Name album</h6>
  <p>category</p>
</div>
<div className="card">
  <div className="card__img">
    <img src={img} alt="" />
  </div>
  <h6>Name album</h6>
  <p>category</p>
</div>
      </div>



    </div>
  )
}

export default Discover