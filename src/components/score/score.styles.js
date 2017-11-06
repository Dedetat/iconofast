import { css } from 'glamor'

const container = css({
  fontSize: '2em',
  margin: '.2em',
  textAlign: 'center',
  transition: 'transform 500ms, color 500ms',
  zIndex: '100',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  maxHeight: '2em',
  height: '10%',
})

const animateBonus = css({
  transform: 'translateY(1em) scale(2)',
})

const animateMalus = css({
  transform: 'scale(0.5)',
  color: 'red',
})

export default {
  container,
  animateBonus,
  animateMalus,
}
