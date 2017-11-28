import { css } from 'glamor'

const credit = css({
  textAlign: 'center',
  lineHeight: '1.5em',
})

const title = css({
  fontSize: 'calc(5vw + 5vh)',
  textAlign: 'center',
  marginTop: '10vh',
  marginBottom: '2vh',
})

const titlePart1 = css({
  color: '#f4c20d',
})

const titlePart2 = css({
  color: '#3cba54',
})

const titlePart3 = css({
  color: '#db3236',
})

const button = css({
  margin: '7vh auto',
  padding: '2em 8em',
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
  lineHeight: '50%',
  cursor: 'pointer',
  outline: 'none',
  '&:hover': {
    backgroundColor: '#1976d2',
  },
})

export default {
  credit,
  title,
  titlePart1,
  titlePart2,
  titlePart3,
  button,
}
