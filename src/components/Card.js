import PropTypes from 'prop-types';

export default function Card({ text, color = 'papayawhip', isActive = true }) {
  const opacity = isActive ? 1 : 0.5;

  return (
    <div style={{ backgroundColor: color, opacity }}>
      <h1>Hello</h1>
      <p>{text}</p>
    </div>
  );
}

Card.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  isActive: PropTypes.bool,
};
