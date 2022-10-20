import React from 'react'
import Card1 from './Cards/Card1'
import Card2 from './Cards/Card2'
import Card3 from './Cards/Card3'

const Main = () => {
  return (
    <>
    <div className='container-fluid' style={{height:"95vh"}}>
      <div className="row row-cols-1 row-cols-md-3 g-4 pt-5">
  <div className="col">
    <Card1 />
  </div>
  <div className="col">
    <Card2 />
  </div>
  <div className="col">
    <Card3 />
  </div>
</div>
<div className="card-footer text-muted text-center mt-5">
       @2022 Design and Developed by Devanand Giri
    </div>
      </div>
    </>
  )
}

export default Main