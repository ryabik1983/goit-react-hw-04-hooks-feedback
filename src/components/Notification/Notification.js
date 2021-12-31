import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return <p>{message}</p>;
};
// "There is no feedback"></Notification>

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Notification;
