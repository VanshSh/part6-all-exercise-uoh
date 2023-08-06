const Notification = ({ message }) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  }
  return (
    <div style={style}>
      <h3> {message}</h3>
    </div>
  )
}

export default Notification
