import { useEffect } from 'react'
import useRequest from '../../hooks/use-request'
import Router from 'next/router'

export default function Signout() {
  const { doRequest } = useRequest({
    url: '/api/users/signout',
    method: 'POST',
    body: {},
    onSuccess: () => Router.push('/'),
  })

  useEffect(() => {
    doRequest()
  }, [doRequest])

  return <div>Signing you out...</div>
}
