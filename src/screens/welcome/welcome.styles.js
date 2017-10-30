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

const question = css({
  fontSize: '8vw',
})

export default {
  credit,
  title,
  titlePart1,
  titlePart2,
  titlePart3,
  question,
}
