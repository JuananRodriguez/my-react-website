
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