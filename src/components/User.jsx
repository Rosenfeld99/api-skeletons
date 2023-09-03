import React, { useEffect, useState } from 'react'
import SkeletonProfile from '../skeletons/SkeletonProfile';

const User = () => {
    const [profile, setProfile] = useState(null);


    useEffect(()=>{
        setTimeout( async () =>{
            let res = await fetch('https://jsonplaceholder.typicode.com/users/1');
            let data = await res.json();

            setProfile(data);
        },5000);
    })

  return (
    <div>
        <h2>User</h2>
        { profile && (
            <div>
                <h3>{ profile.username }</h3>
                <p>{ profile.email }</p>
                <a href={ profile.website }>{ profile.website }</a>
            </div>
        ) }
        { !profile && <SkeletonProfile theme="dark"/> }
    </div>
  )
}

export default User