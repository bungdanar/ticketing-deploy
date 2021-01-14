import { useEffect, useState } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import useRequest from '../../hooks/use-request'
import Router from 'next/router'

const OrderShow = ({ order, currentUser }) => {
  const [timeLeft, setTimeLeft] = useState(0)
  const { doRequest, errors } = useRequest({
    url: '/api/payments',
    method: 'POST',
    body: {
      orderId: order.id,
    },
    onSuccess: () => Router.push('/orders'),
  })

  useEffect(() => {
    const findTimeLeft = () => {
      const msLeft = new Date(order.expiresAt) - new Date()
      setTimeLeft(Math.round(msLeft / 1000))
    }

    findTimeLeft()

    const timerId = setInterval(findTimeLeft, 1000)

    return () => {
      clearInterval(timerId)
    }
  }, [order.expiresAt])

  if (timeLeft < 0) {
    return <div>Order Expired</div>
  }

  return (
    <div>
      Time left to pay: {timeLeft} seconds
      <StripeCheckout
        token={({ id }) => doRequest({ token: id })}
        stripeKey='pk_test_51I8bxyBFIR2B0NeJXveseTmplxP43MIb4c9zPTfCjISnkzVaJgftDAiaV4BOOfnL90T0g6kov1HJg0LtL1TJbhWA00sa4orNzg'
        amount={order.ticket.price * 100}
        email={currentUser.email}
      />
      {errors}
    </div>
  )
}

OrderShow.getInitialProps = async (context, client) => {
  const { orderId } = context.query
  const { data } = await client.get(`/api/orders/${orderId}`)

  return { order: data }
}

export default OrderShow
