import Styled from 'styled-components'
import _DEFAULT_COLORS from './colors.js'

const reverse = (mode) =>{
  return mode === 'light' ? 'dark' : 'light'
}

const buttonBackgroundColor  = ({theme, color}) => {
  const STYLE = theme.color || _DEFAULT_COLORS
  const COLOR = STYLE[color] || STYLE[Button.defaultProps.color] || _DEFAULT_COLORS[Button.defaultProps.color];
  return COLOR[theme.mode]
}

const buttonColor = ({theme, color}) => {
  const STYLE = theme.color || _DEFAULT_COLORS
  const COLOR = STYLE[color] || STYLE[Button.defaultProps.color] || _DEFAULT_COLORS[Button.defaultProps.color];
  return COLOR[reverse(theme.mode)]
};

const Button = Styled.button`
  font: inherit;
  padding: 0.5em 1em;
  border: ${buttonColor} 1px solid;
  background-color: ${buttonBackgroundColor};
  color: ${buttonColor};
  border-radius: 0.25em;
  margin-right: 0.5em;
  cursor: pointer;
`;

Button.defaultProps = {
  color: 'default',
};

export default Button;
