import React from 'react'

export default function Card(props) {
    return (
        <div className='cardDiv col mt-5 col-lg-2 ms-2  '><div>
            <img src={props.cardImg} className="card-img-top"  alt="..." />
            <div className="card-body">
                <h5 className="card-title heading">{props.deal}</h5>
                <p className="card-text">{props.desc}</p>
            </div>

            <div className="card-body d-flex mt-3">
                <h4 className='heading card-link'>{props.price}</h4>
               <button className='btn btn-danger ms-5  '>Add to bucket</button>
            </div>
        </div></div>
    )
}
