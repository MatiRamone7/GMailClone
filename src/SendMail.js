import React from 'react'
import './SendMail.css'
import CloseIcon from '@material-ui/icons/Close'
import { Button } from '@material-ui/core'
import { useForm } from 'react-hook-form'

function SendMail() {
    const {register, handleSubmit, watch, formState: { errors } } = useForm()

    const onSubmit = (formData) => {
        console.log(formData);
    }

    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <CloseIcon className="sendMail__close" />
            </div>

            <form onSubmit = {handleSubmit(onSubmit)}>

                {/* Necesito los names para el useForm */}

                <input 
                       placeholder="To" 
                       type="text" 
                       {...register('receiver', {required: true}) } 
                />
                
                {errors.receiver && <p className="sendMail__error">To is required!!</p>}

                <input name="subject" 
                       placeholder="Subject" 
                       type="text" 
                       {...register('subject', {required: true}) } 
                />
                <input name="message" 
                       placeholder="Message..." 
                       type="text" 
                       className="sendMail__message" 
                       {...register('message', {required: true}) } 
                />

                <div className="sendMail__options">
                    <Button className="sendMail__send"
                            variant="contained"
                            color="primary"
                            type="submit">
                        Send
                    </Button>
                </div>

            </form>
        </div>
    )
}

export default SendMail