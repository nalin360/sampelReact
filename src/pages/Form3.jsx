import React from 'react'
import Inputss from '../components/ui/Inputss'
import { useForm } from 'react-hook-form';
import Buttons from '../components/ui/Buttons';

function Form3() {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        reset();
    };
    return (
        <div className='flex flex-col gap-4'>
            <Inputss
                type="text"
                name="fullName"
                placeholder={"name"}
                errors={errors}
                register={register}
                validationSchema={{
                    required: "Plese enter your full name ",
                    minLength: {
                        value: 3,
                        message: "Please enter a minimum of 3 characters"
                    }
                }}
            />
            <Inputss
                type="email"
                name="email"
                placeholder={"email..."}
                errors={errors}
                register={register}
                validationSchema={{
                    required: true,
                }}
            />
            <Buttons type={"submit"} onClick={handleSubmit(onSubmit)} >Submit</Buttons>
        </div>
    )
}

export default Form3