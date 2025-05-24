// "use client"
// import { api } from '@/convex/_generated/api';
// import { useUser } from '@clerk/nextjs';
// import { useMutation } from 'convex/react'
// import React, { useEffect } from 'react'

// function WorkspaceProvider({ children }) {

//   const newUserMutation = useMutation(api.users.CreateNewUser);
//   const {user} = useUser();

//   useEffect(() => {
//     user&&CreateNewUser()
//   }, [user])
  
//   const CreateNewUser = async () => {
//       const result  = await newUserMutation({
//         name:user?.fullName,
//         email:user?.primaryEmailAddress?.emailAddress,
//         picture:user?.imageUrl
//       });
//       console.log(result);
//   }

//   return (
//     <div>{children}</div>
//   )
// }

// export default WorkspaceProvider


"use client";
import { api } from '@/convex/_generated/api.js';
import { useMutation } from 'convex/react';
import { useUser } from '@clerk/nextjs';
import React, { useEffect } from 'react';

function WorkspaceProvider({ children }) {
  const newUserMutation = useMutation(api.users.CreateNewUser);
  const { user } = useUser();

  useEffect(() => {
    user && CreateNewUser();
  }, [user]);

  const CreateNewUser = async () => {
    const result = await newUserMutation({
      name: user?.fullName,
      email: user?.primaryEmailAddress?.emailAddress,
      picture: user?.imageUrl
    });
    console.log(result);
  };

  return <div>{children}</div>;
}

export default WorkspaceProvider;
