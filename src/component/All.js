import React from 'react'
import records from './datalist.json'

function All() {

  return (
    <div className='mt-5'>
    <div className='container'>
    <div className='row'>
        <div className='d-flex flex-wrap'>
        {records.map((item)=>(
            <div className='col-md-4 p-2'>
                <div className='card m-3 cardDiv'>
                    <img src={item.image} alt='' height={200}/>
                    <div className='card-body'>
                        <p className='paraHead'>{item.tilte}</p>
                        <p>{item.description}</p>
                        <a className='active1'>READ MORE <i className="bi bi-arrow-right-circle-fill"></i></a>
                    </div>
                    <div className='card-footer p-3'>
                        <span >{item.date}</span>  <span className='ms-4'>{item.comment} </span>
                    </div>
                </div>
            </div>
        ))}
        </div>
    </div>
    </div>
     </div>
  )
}

export default All