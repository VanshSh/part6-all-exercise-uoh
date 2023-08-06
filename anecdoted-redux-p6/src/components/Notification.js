const Notification = ({ message, type }) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  }
  return (
    <div style={style}>
      <h3> ✉️ Message: {message}</h3>
      <p>Type: {type}</p>
    </div>
  )
}

export default Notification
