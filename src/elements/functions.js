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

export const size = (props, SIZES) =>{
  findDefaultProp(props,'size','xs')
  const SIZE = props.size || DEFAULT

  /** SIZE VALIDATION: MUST BE ONE OF THOSE */
  if(SIZES[SIZE] === undefined)
    console.error("Props.size must be one of ['xs','sm','md','lg','xl']", new Error())

  return SIZES[SIZE] || SIZES[DEFAULT]
}

export const findDefaultProp = (props, nameOfThePropToFind, defaultProp) => {
  return (
    props.forwardedComponent &&
    props.forwardedComponent.defaultProps &&
    props.forwardedComponent.defaultProps[nameOfThePropToFind]
  ) ? props.forwardedComponent.defaultProps[[nameOfThePropToFind]] : defaultProp
}