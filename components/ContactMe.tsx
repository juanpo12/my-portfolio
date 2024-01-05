'use client'

import {Button, Input, Textarea} from "@nextui-org/react";
import React, { useState } from "react"

const ContactMe = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    })

    const [errors, setErrors] = useState('');


    const validateEmail = (email : string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };

    const isInvalid = React.useMemo(() => {
		if (form.email === '') return false

		return !validateEmail(form.email)
	}, [form.email])

    const handleSubmit = () => {
        const emailValid = validateEmail(form.email);

        if (!emailValid) {
          setErrors("Please enter a valid email address.");
          return;
        }
    
        setErrors('');

        console.log(form)
    }
    
    return(
        <form className="w-full h-[80vh] flex justify-center
        items-center text-center" 
        onSubmit={handleSubmit}
        >
            <div className="sm:w-1/3 h-2/3 flex justify-center flex-col bg-gray-800 bg-opacity-50 rounded-3xl p-5 gap-4">
                <h1 className="text-3xl font-mono">Contact me</h1>
                    <div className="flex flex-col justify-center items-center gap-4 p-5 m-5 h-full">

                        <Input label="Your name" size={'md'} className="w-2/3 bg-gray-700 rounded-lg" onChange={(e) => setForm({...form, name: e.target.value})}></Input>
                        <Input label="Email" size={'md'} isInvalid={isInvalid} color={isInvalid ? 'danger' : form.email === '' ? 'default' : 'success'} errorMessage={isInvalid && 'Please enter a valid email'}  className="w-2/3 bg-gray-700 rounded-lg" onChange={(e) => setForm({...form, email: e.target.value})}></Input>

                        <Textarea
                            isRequired
                            label="Message"
                            labelPlacement="inside"
                            placeholder="Enter your message"
                            className="max-w-xs"
                            variant="faded"
                            onChange={(e) => setForm({...form, message: e.target.value})}
                        />

                        <Button isDisabled={isInvalid || form.email === '' || form.message === '' || form.name === ''} type="submit" color="success" variant="shadow" className="w-1/3" >Send</Button>
                    </div>
                    

            </div>
        </form>
    )
}

export default ContactMe