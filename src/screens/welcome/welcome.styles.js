import { css } from 'glamor'

const container = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  minHeight: '100vh',
})

const title = css({
  fontSize: 'calc(5vw + 5vh)',
  textAlign: 'center',
  margin: '10vh auto',
})

const titlePart1 = css({
  color: '#3cba54',
})

const titlePart2 = css({
  fontStyle: 'italic',
  fontWeight: 100,
  color: '#db3236',
})

const rules = css({
  textAlign: 'center',
  lineHeight: '1.5em',
  margin: 'auto 2em',
})

const question = css({
  fontSize: '1.5em',
  margin: '.5em auto',
})

const button = css({
  margin: '5vh',
  padding: '2em 10em',
  borderStyle: 'none',
  borderRadius: '.2em',
  textTransform: 'uppercase',
  boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
  color: '#ffffff',
  backgroundColor: '#4885ed',
  minWidth: '10vw',
  minHeight: '5vh',
  fontSize: '.8em',
  transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  lineHeight: '1.4em',
  fontWeight: 600,
  cursor: 'pointer',
  outline: 'none',
  '&:hover': {
    backgroundColor: '#1976d2',
  },
})

export default {
  container,
  title,
  titlePart1,
  titlePart2,
  rules,
  question,
  button,
}
