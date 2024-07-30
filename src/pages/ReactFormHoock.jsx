import React from 'react'
import { useForm } from 'react-hook-form'

function ReactFormHoock() {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm({
        defaultValues: {
            names: "",
            email:"abc@gmail.com",
            password: "",
            gender: "",
            radio: ""
        },
        mode:"onChange" 
    })
    const onSubmit = data => console.log(data);
    // console.log(watch("email"));
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}
                className='text-black flex flex-col gap-2' >
                <input type='text' defaultValue={"Nalin"} placeholder='Enter name...' {...register("names")} />
                <input type='email' placeholder='Enter email... ' {...register("email", { required: true })} />
                {errors.email && <span>This field is required</span>}
                <input type='password' placeholder='Enter password...'
                    {...register("password", {
                        required: "password required", minLength: {
                            value: 6,
                            message: "Password should be at-least 6 characters."
                        }
                    })} />
                {errors.password && <span>{errors.password.message}</span>}
                <select {...register("gender", { required: "Select a option " })
                }>
                    <option value="">Select...</option>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                </select>
                {errors.gender && <span>{errors.gender.message}</span>}
                <input {...register("radio")} type="radio" value="A" />
                <input {...register("radio")} type="radio" value="B" />
                <input className='bg-white cursor-pointer rounded-xl' type='submit' />
                <input type='reset' onClick={reset}  value="Custom Reset Field Values & Errors"
                className='bg-white cursor-pointer rounded-xl' 
                />
            </form>
        </div>
    )
}

export default ReactFormHoock