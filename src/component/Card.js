import React from 'react';

//JXS

const Card = ({ name,email,id}) => {
// destructure

return (
//header 

<div className='bg-light-green dib br3 pa3 ma2 grow btw2 shadow-5'>

<img  alt='Robots' src={`https://robohash.org/${id}?size=200x200`} />
       
<div>
  <h2>{name}</h2>

<p>{email}</p>

</div>

</div>

);

}

 export default Card;

