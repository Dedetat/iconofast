import { css } from 'glamor'

const container = css({
  width: '46vw',
  height: '46%',
  backgroundSize: 'contain',
  margin: '1vw',
  border: '0px',
  boxShadow: '0px 0px 30px -10px black',
  cursor: 'pointer',
  '&:hover': {
    boxShadow: '0px 0px 30px -5px black',
  },
  '&:disabled': {
    opacity: '.5',
    cursor: 'auto',
    boxShadow: 'inherit',
  },
})

export default {
  container,
}
