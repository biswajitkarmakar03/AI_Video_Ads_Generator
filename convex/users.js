import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const  CreateNewUser=mutation({
    args:{
        name:v.string(),
        email:v.string(),
        picture:v.string()
    },
    handler:async (ctx, args) => {
        // If user already exist ?
        const userData=await ctx.db.query('user')
        .filter(q=>q.eq(q.field('email'),args.email))
        .collect();

        // If the user does not exist then INSERT a new user 

        if (userData?.length==0) {
            
            const data={
                name:args.string(),
                email:args.email(),
                picture:args.picture,
                credits:30
            }

            const result = await ctx.db.insert('users',{
                  ...data
            });

            console.log(result);
            return{
                ...data,
                _id:result
            }
        }

        return userData[0];
    }
})