import React from 'react'

const PriceChangeIndicator = props => {
  let { icon, color } = getIconClasses(props.percentChange)
  return (
    <i className={`${icon} ${color} ${props.size}`}></i>
  )
}

const getIconClasses = percentChange => {
  let icon = ''
  let color = ''
  if (Math.sign(percentChange) === 1) {
    return {
      icon: 'fa fa-caret-up',
      color: 'green'
    }
  } else if (Math.sign(percentChange) === -1) {
    return {
      icon: 'fa fa-caret-down',
      color: 'red'
    }
  }
  return { icon, color }
}

PriceChangeIndicator.defaultProps = {
  percentChange: 0,
  size: ''
}

export default PriceChangeIndicator