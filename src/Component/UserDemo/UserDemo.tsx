import React from 'react'

type UserDemoProps = {
    users: {
        id: number;
        name: string;
        email: string;
        age: number;
    }[]
}

const UserDemo = ({users} : UserDemoProps) => {
    // console.log(users);
  return (
    <>
    {
        users.map( (user)=>
        {
            return (
            <div key={user.id}>
            <h2>{user.age}</h2> 
            </div>
            )
        })}    
    </>
  )
}

export default UserDemo