import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router'

const LogIn = () => {
    const history = useHistory()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = data => {
        fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(res =>
                localStorage.setItem('token', JSON.stringify(res.token))
            )
            .then(() => {
                history.push('/')
            })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="log-in-form col">
            <div className="input-group mb-3">
                <span
                    className="input-group-text"
                    id="inputGroup-sizing-default"
                >
                    Email address
                </span>
                <input
                    type="text"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    {...register('email', { required: true })}
                />
            </div>
            {errors.email && (
                <span className="text-danger form-text">
                    {errors.email.type === 'required' && 'Email is required'}
                </span>
            )}
            <div className="input-group mb-3">
                <span
                    className="input-group-text"
                    id="inputGroup-sizing-default"
                >
                    Password
                </span>
                <input
                    type="password"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    {...register('password', { required: true })}
                />
            </div>
            {errors.password && (
                <span className="text-danger form-text">
                    {errors.password.type === 'required' &&
                        'Password is required'}
                </span>
            )}
            <div>
                <button type="submit" className="btn btn-primary">
                    Log in
                </button>
            </div>
        </form>
    )
}

export default LogIn


