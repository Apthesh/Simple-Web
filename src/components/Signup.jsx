// import React from 'react'
import "../css/Signup.css"
import { useForm } from 'react-hook-form';

export default function Signup() {
  let {register,handleSubmit,formState:{errors}}=useForm();
  let isAlpha=/^[A-Za-z]+$/g;

  const sendForm=(data)=>{
    console.log(data)
  }
  console.log(errors)
  return (
    <section className='section'>
    <form className='form' onSubmit={handleSubmit(sendForm)}>
      <h1> SIGN UP</h1>
      <div>
        <input type="text" placeholder='Full Name' {...register("fullname",{
          required:{value:true,message:"Fullname is required"},
          minLength:{value:4,message:"Fullname should contain atleast 4 characters"},
          maxLength:{value:10,message:"Fullname should contain atmost 10 chactaers"},
          pattern:{value:isAlpha,message:"Fullname should contain only alphabets"}
        })} />
      </div>
      <div className='message' >
          {errors.fullname?.message}
      </div>
      <div>
        <input type="password" placeholder='Password' {...register("password",{
          required:{value:true,message:"Password is required"},
          minLength:{value:4,message:"Password should contain atleast 4 characters"},
          maxLength:{value:10,message:"Password should contain atmost 10 chactaers"}
        })} />
      </div>
      <div className='message'>
      {errors.password?.message}
      </div>
      <div>
        <button type="submit">Register</button>
      </div>
  
    </form>
    </section>
  )
}
