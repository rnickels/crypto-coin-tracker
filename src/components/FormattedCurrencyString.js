import React from 'react'

const FormattedCurrencyString = props => {
  let string = formatString(props.value, props.currency)
  return (
    <div>{string}</div>
  )
}

function formatString(value, currency) {
  return Number(value).toLocaleString('en', { style: 'currency', currency: currency })
}

FormattedCurrencyString.defaultProps = {
  currency: 'usd'
}

export default FormattedCurrencyString