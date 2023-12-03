import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Brand from './Brand';


const Brands = () => {
    const [brands,setBrands] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/brands')
        .then(res => res.json())
        .then(data=>{
            setBrands(data);
        })
    },[])

    return (
        <div className='my-12'>
            <h3 className="text-4xl font-bold text-center">Our Brands</h3>
            <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 mt-12'>
            {
                brands.map(brand => <Brand key={brand._id} brand={brand}></Brand>)
            }
        </div>
        </div>
        
    );
};

export default Brands;