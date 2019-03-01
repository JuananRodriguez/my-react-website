import _DEFAULT_COLORS from "./colors"
import Button from "../elements/Button/index"

/**
 * Calcula el margen de toda la aplicación y lo devuelve dividido por el divisor del componente/elemento
 * */
export const margin = ({theme,...props}) =>{
  let VALUE = theme.themeMargin && theme.themeMargin.value;
  let UNIT = theme.themeMargin && theme.themeMargin.unit;
  const DIVISOR = props.divisor || 1

  /** VALUE VALIDATION: MUST BE A NUMBER */
  if ( isNaN(Number(VALUE)) ){
    console.error('theme.marginTheme.value must be a number', new Error())
    VALUE=undefined
  }

  /** UNIT VALIDATION: MUST BE ONE OF THOSE */
  if( !['em','px','%','pc','rem'].includes(UNIT) ){
    console.error("theme.marginTheme.unit must be one of ['em','px','%','pc','rem']", new Error())
    UNIT=undefined
  }

  return (VALUE && UNIT) ? `${VALUE / DIVISOR}${UNIT}` : '0.5em'
}


/**
 * Calcula el tamaño apropiado según los valores pasados ( tanto el string de tamaño como los valores de los mismos
 * */
export const size = (props, SIZES) =>{
  const DEFAULT = findDefaultProp(props,'size','xs')
  const SIZE = props.size || DEFAULT

  /** SIZE VALIDATION: MUST BE ONE OF THOSE */
  if(SIZES[SIZE] === undefined)
    console.error("Props.size must be one of ['xs','sm','md','lg','xl']", new Error())

  return SIZES[SIZE] || SIZES[DEFAULT]
}


/**
 * Encuentra el valor por defecto de la propiedad creada. Si no lo encuentra, se asigna uno a mano también pasado
 * */
export const findDefaultProp = (props, nameOfThePropToFind, defaultProp) => {
  return (
    props.forwardedComponent &&
    props.forwardedComponent.defaultProps &&
    props.forwardedComponent.defaultProps[nameOfThePropToFind]
  ) ? props.forwardedComponent.defaultProps[[nameOfThePropToFind]] : defaultProp
}

/**
 * Invierte el modo del theme de la aplicación
 * */
export const reverseMode = (mode) =>{
  return mode === 'light' ? 'dark' : 'light'
}

/**
 * Calcula el color de fondo según el string color de la propiedad y el tema. Si no lo cuentra, recurre al valor por defecto del componente
 * */
export const backgroundColorFn  = ({theme, color, ...props}) => {
  const DEFAULT = findDefaultProp(props,'color','default')
  const STYLE = theme.color || _DEFAULT_COLORS
  const COLOR = STYLE[color] || STYLE[DEFAULT] || _DEFAULT_COLORS[DEFAULT];
  return COLOR[theme.mode]
}

/**
 * Calcula el color del texto según el string color de la propiedad y el tema. Si no lo cuentra, recurre al valor por defecto del componente
 * */
export const colorFn = ({theme, color, ...props}) => {
  const DEFAULT = findDefaultProp(props,'color','default')
  const STYLE = theme.color || _DEFAULT_COLORS
  const COLOR = STYLE[color] || STYLE[DEFAULT] || _DEFAULT_COLORS[DEFAULT];
  return COLOR[reverseMode(theme.mode)]
};