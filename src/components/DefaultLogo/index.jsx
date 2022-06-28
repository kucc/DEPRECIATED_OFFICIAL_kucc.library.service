import PropTypes from 'prop-types';

export const DefaultLogo = ({
  logoName,
  width,
  height,
  onClick,
  isPointer = false,
}) => {
  return (
    <img
      onClick={onClick}
      src={`/img/logo/${logoName}.svg`}
      alt='default-logo'
      width={width + 'px'}
      height={height + 'px'}
      style={{ cursor: isPointer ? 'pointer' : 'default' }}
    />
  );
};

DefaultLogo.propTypes = {
  logoName: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  onClick: PropTypes.func,
  isPointer: PropTypes.bool,
  style: PropTypes.object,
};
// KUCC Logo
