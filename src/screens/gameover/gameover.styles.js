import { css } from 'glamor'

const emoji = css({
  fontSize: 'calc(5vw + 5vh)',
  overflow: 'hidden',
})

const score = css({
  fontWeight: 600,
  color: '#db3236',
  fontSize: 'calc(8vw + 2vh)',
})

const actions = css({
  display: 'flex',
  justifyContent: 'center',
  transform: 'scale(1.5)',
  margin: '7vh auto',
})

const twitter = css({
  height: '28px',
  margin: 'auto 1vh',
  display: 'flex',
})

const retry = css({
  cursor: 'pointer',
  width: '76px',
  height: '28px',
  border: 'none',
  borderRadius: '4px',
  fontFamily: '"Helvetica Neue", Arial, sans-serif',
  color: '#777777',
  margin: 'auto 1vh',
  textTransform: 'uppercase',
  fontSize: '13px',
  '&:hover': {
    background: '#c1c1c1',
  },
})

export default {
  emoji,
  score,
  actions,
  twitter,
  retry,
}
