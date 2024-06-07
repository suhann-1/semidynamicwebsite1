import React, { useState } from 'react'
import Nav from './Nav'

const View = () => {
    const [data,changeData]=useState(
          [
            {"productname":"tv","price":50000},
            {"productname":"watch","price":5000},
            {"productname":"phone","price":450000},
            {"productname":"earphone","price":500},
            {"productname":"toy","price":1000},
            {"productname":"tv","price":50000},
            {"productname":"watch","price":5000},
            {"productname":"phone","price":450000},
            {"productname":"earphone","price":500},
            {"productname":"toy","price":1000}
          ]




    )
    return (
        <div>
            <Nav />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {data.map(
                                (value,index)=>
                                    {
                                        
                                        return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                <div className="card" >
                                    <img src="https://images.samsung.com/is/image/samsung/in-full-hd-tv-te50fa-ua43te50fakxxl-frontblack-231881877?$650_519_PNG$" class="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{value.productname}</h5>
                                        <p className="card-text">{value.price}</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
})}
                        </div>
                    </div>
                </div>        </div>
        </div>

    )
}

export default View