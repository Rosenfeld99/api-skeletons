import React, { useEffect, useState } from 'react'
import SkeletonArticale from '../skeletons/SkeletonArticale';

const Articals = () => {

    const [articals, setArticals] = useState(null);
    
    useEffect(() =>{
        setTimeout( async () =>{
            let res = await fetch('https://jsonplaceholder.typicode.com/posts');
            let data = await res.json();

            setArticals(data);
        },5000);
    });

  return (
    <div>
        <h2>Articals</h2>

        { articals && articals.map( posts =>(
            <div key={ posts.id }>
                <h3>{ posts.title }</h3>
                <p>{ posts.body }</p>
            </div>
        ))}

        { !articals && [1,2,3,4,5].map( (n) => <div key={n}> <SkeletonArticale /> </div> )}
    </div>
  )
}

export default Articals