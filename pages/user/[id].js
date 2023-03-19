import  {useRouter}  from 'next/router'
import React from 'react'

function UserId() {
   const route = useRouter();
   let userId = route.query.id;

  return (
    <div>Users userId is :  {userId} </div>
  )
}

export default UserId;