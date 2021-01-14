import axios from 'axios'
import { useState } from 'react'

export default function useRequest({ url, method, body, onSuccess }) {
  const [errors, setErrors] = useState(null)

  const doRequest = async (props = {}) => {
    try {
      setErrors(null)

      const response = await axios.request({
        method,
        url,
        data: { ...props, ...body },
      })

      if (onSuccess) {
        onSuccess(response.data)
      }

      return response.data
    } catch (error) {
      setErrors(
        <div className='alert alert-danger'>
          <h4>Ooops...</h4>
          <ul>
            {error.response.data.errors.map((e) => (
              <li key={e.message}>{e.message}</li>
            ))}
          </ul>
        </div>
      )
    }
  }

  return { doRequest, errors }
}
