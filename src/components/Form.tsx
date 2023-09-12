import { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import BeatLoader from 'react-spinners/BeatLoader'
import { dataContact } from '../data/data'

type Inputs = {
  subject?: string
  name?: string
  email?: string
  phone?: string
  message?: string
}

const Form = () => {
  const [sended, setSended] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data: Inputs) => {
    setSending(true)
    const sender = {
      to: 'intendencia.estancias@gmail.com',
      from: 'no-reply@estanciasdelpilar.com',
      from_name: 'Estancias del Pilar',
    }

    axios.post('https://www.estanciasdelpilar.com/backend/send-email.php', { ...data, ...sender }).then((data) => {
      if (data.data === 'success') {
        setSended(true)
        setSending(false)
      } else {
        setError(true)
        setSending(false)
      }
    })
  }

  const Error = () => {
    return <div className="text-sm font-medium mt-1 text-primary">{dataContact.required}</div>
  }

  return (
    <>
      {error ? (
        <span className="text-2xl font-bold text-white">{dataContact.error}</span>
      ) : sended ? (
        <span className="text-3xl font-bold text-white">{dataContact.thanks}</span>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <select
              className="w-full bg-white h-11 rounded-2xl cursor-pointer mb-2 px-6 transition-all hover:bg-gray-200"
              placeholder={dataContact.select[0]}
              {...register('subject', { required: true })}
            >
              <option>Seleccione una opción</option>
              <option>{dataContact.select[1]}</option>
              <option>{dataContact.select[2]}</option>
            </select>
          </div>
          <div>
            <input
              className="w-full bg-white h-11 rounded-2xl mb-2 px-6"
              placeholder={dataContact.name}
              {...register('name', { required: true })}
            />
            {errors.name && <Error />}
          </div>
          <div>
            <input
              className="w-full bg-white h-11 rounded-2xl mb-2 px-6"
              placeholder={dataContact.email}
              {...register('email', { required: true })}
            />
            {errors.email && <Error />}
          </div>
          <div>
            <input
              className="w-full bg-white h-11 rounded-2xl mb-2 px-6"
              placeholder={dataContact.phone}
              {...register('phone', { required: true })}
            />
            {errors.phone && <Error />}
          </div>

          <textarea
            className="w-full bg-white h-28 rounded-2xl mb-2 px-6 py-4"
            placeholder={dataContact.message}
            {...register('message')}
          />
          <div className="flex justify-end">
            {sending ? (
              <BeatLoader className="mt-6" />
            ) : (
              <button
                type="submit"
                className="bg-lightblue rounded-2xl font-medium text-white h-11 hover:bg-black hover:shadow-xl transition-all px-8 uppercase text-sm"
              >
                {dataContact.send}
              </button>
            )}
          </div>
        </form>
      )}
    </>
  )
}

export default Form
