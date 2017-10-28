import { types, onPatch } from 'mobx-state-tree'
import random from 'lodash/random'
import Draw from './draw'

/* eslint-disable no-param-reassign */

const Store = types
  .model({
    previous: types.maybe(types.reference(Draw)),
    current: types.maybe(types.reference(Draw)),
    lastChange: types.maybe(types.number),
    draws: types.array(Draw),
    picks: types.maybe(types.array(types.reference(Draw))),
    score: 0,
    last: false,
    ended: false,
  })
  .named('Store')
  .actions(self => ({
    afterCreate: () => {
      self.picks = self.draws.map(draw => draw.name)

      self.next()
    },
    computeScore: () => {
      const currentTime = Date.now()
      const elapsedTime = currentTime - self.lastChange

      const score = Math.round(Math.max((10000000 / elapsedTime), 1000))

      self.score += score
    },
    verify: (choice) => {
      if (self.ended) return

      choice.setSelected()

      if (self.current.goodChoice === choice.url) {
        self.computeScore()

        // we can pick next only if this is not the last draw
        // if this is the last draw and verify is called, then the game is ended
        if (!self.last) self.next()
        else self.ended = true
      } else {
        self.score -= random(1000, 8000) * 2
      }
    },
    next: () => {
      if (self.ended) return

      const next = self.picks[random(0, self.picks.length - 1)]

      self.previous = self.current || next
      self.current = next
      self.current.shuffle()
      self.lastChange = Date.now()

      self.picks.remove(next)

      if (self.picks.length === 0) self.last = true
    },
  }))

export default () => {
  const store = Store.create({
    draws: [
      {
        name: 'vscode',
        layers: [
          'm373.76 5.0254 0.17 422.47-365-54.64 365.36 123.57 122.5-50.72 2.23-386.14-125.26-54.545zm-127.33 73.903-113.01 110.88-67.348-50.88-27.857 9.28 68.565 67.74-68.923 67.62 27.858 9.29 67.655-50.64 112.7 111.35 66.28-28 0.21 0.14v-0.23l0.3-0.12-0.3-0.23 0.65-217.63-66.78-28.572z',
          'm246.07 157.86l-77.83 58.25 76.77 57.99 1.06-116.24z',
          '',
        ],
        choices: [
          '/img/vscode-blue.png',
          '/img/vscode-orange.png',
          '/img/vscode-green.png',
          '/img/vscode-pink.png',
        ],
        goodChoice: '/img/vscode-blue.png',
      },
      {
        name: 'mobx-state-tree',
        layers: [
          'm257.24 11.862c-8.4245-0.1514-17.483 3.3353-26.566 17.204-34.44 52.602-104.63 153.64-160.13 236.74-36.844 55.16-70.714 101.37-70.714 124.05-0.62514 31.87 17.496 78.11 106.84 71.86 0 0 48.558-1.2452 126.66-56.509 50.021-35.395 129.24-84.035 160.75-85.946 36.655-4.1654 72.276 6.2546 101.22 21.243-39.94-56.88-171.89-269.91-214.68-319.5-7.1-8.223-14.09-9.294-23.38-9.138zm175.52 332.42c-3.9521 0.0488-7.9473 0.34659-11.945 0.91643-71.777 5.7395-138.05 76.856-201.61 101.58 51.373 79.327 256.27 34.16 280.38-48.064 5.5836-31.809-28.62-54.909-66.824-54.436z',
          'm258.94 46.455c-0.51131 0.0076-0.97681 0.03725-1.3848 0.08008-3.323 0.1621-10.896 0.47579-17.908 9.6504-46.26 60.51-174.49 257.78-180.24 271.92-2.0149 6.045-4.1775 12.404-4.7109 17.492-1.572 14.995 4.205 25.737 15.75 38.602 24.741 28.717 75.578 16.287 75.578 16.287 7.237-0.497 27.232-5.5882 50.68-18.531 44.06-24.321 104.79-66.306 147.44-86.846 21.365-10.288 43.004-10.51 50.547-9.5859 18.119-2.4996 48.736 9.9961 48.736 9.9961s-123.02-189.56-168.82-241.07c-6.14-6.9046-12.097-8.0446-15.676-7.9922zm180.08 314.45 0.002 0.002c-2.4006 0.0575-4.9322 0.26463-7.5976 0.64453-71.782 5.74-118.62 66.254-168.04 87.006 42.54 58.557 174.98 5.4443 208.37-42.762 9.918-12.197 3.2746-45.753-32.734-44.891z',
          '',
        ],
        choices: [
          '/img/mst-pink.png',
          '/img/mst-blue.png',
          '/img/mst-green.png',
          '/img/mst-orange.png',
        ],
        goodChoice: '/img/mst-orange.png',
      },
      {
        name: 'android',
        layers: [
          'm180.7 48.365c-0.68582-0.02812-1.367 0.14937-1.9535 0.55212-1.564 1.077-1.8595 3.3612-0.66254 5.1032l20.166 29.273c-32.063 14.916-54.548 43.26-57.413 76.34h218.31c-2.855-33.08-25.341-61.424-57.402-76.34l20.16-29.27c1.197-1.74 0.89719-4.0258-0.6678-5.1058-1.563-1.074-3.8048-0.54048-4.9928 1.2015l-20.949 30.409c-13.807-5.439-29.14-8.4711-45.3-8.4711s-31.494 3.0291-45.3 8.4711l-20.95-30.413c-0.75063-1.0875-1.9068-1.7041-3.0498-1.751zm-78.23 126.38c-13.45 0-24.354 10.904-24.354 24.354v98.507c0 13.45 10.904 24.354 24.354 24.354 13.451 0 24.354-10.904 24.354-24.354v-98.507c0-13.45-10.903-24.354-24.354-24.354zm295.06 0c-13.451 0-24.354 10.904-24.354 24.354v98.507c0 13.45 10.903 24.354 24.354 24.354 13.45 0 24.354-10.904 24.354-24.354v-98.507c0-13.45-10.904-24.354-24.354-24.354zm-256.69 0.75195v177.92c0 10.566 8.566 19.132 19.135 19.132h22.634v54.744c0 13.451 10.903 24.354 24.354 24.354s24.354-10.903 24.354-24.354v-54.744h37.371v54.744c0 13.451 10.902 24.354 24.354 24.354s24.354-10.903 24.354-24.354v-54.744h22.634c10.569 0 19.135-8.5614 19.135-19.132v-177.92h-218.33z',
          'm193.7 104.04c-8.25 0-14.92 6.676-14.92 14.912 0 8.238 6.68 14.914 14.92 14.914 8.23 0 14.9-6.678 14.9-14.914 0-8.238-6.67-14.912-14.9-14.912zm112.6 0c-8.23 0-14.91 6.674-14.91 14.912s6.68 14.914 14.91 14.914c8.24 0 14.91-6.678 14.91-14.914 0-8.235-6.67-14.912-14.91-14.912z',
          '',
        ],
        choices: [
          '/img/false.1.png',
          '/img/false.2.png',
          '/img/false.png',
          '/img/true.png',
        ],
        goodChoice: '/img/true.png',
      },
      {
        name: 'chromium',
        layers: [
          'm250.71 2.0762c-100.74-4.482-193.78 66.546-230.53 157.97-23.365 54.92-24.376 118.29-3.154 174.05 34.244 106.31 150.05 172.53 258.99 163.01 62.44-4.37 120.3-37.49 162.12-82.98 84.82-96.43 79.18-261.12-18.71-346.63-46.14-41.081-106.64-65.888-168.72-65.424z',
          'm370.76 251.06a119.7 119.7 0 0 1 -119.7 119.7 119.7 119.7 0 0 1 -119.7 -119.7 119.7 119.7 0 0 1 119.7 -119.7 119.7 119.7 0 0 1 119.7 119.7z',
          'm252.14 160c-36.273-1.6114-69.775 23.966-83.004 56.887-8.4136 19.776-8.7765 42.597-1.1337 62.671 12.332 38.28 54.031 62.122 93.253 58.693 22.483-1.5726 43.318-13.498 58.374-29.88 30.543-34.719 28.512-94.019-6.7347-124.81-16.61-14.8-38.39-23.73-60.75-23.56z',
        ],
        choices: [
          '/img/false.1.png',
          '/img/false.2.png',
          '/img/false.png',
          '/img/true.png',
        ],
        goodChoice: '/img/true.png',
      },
      {
        name: 'kotlin',
        layers: [
          'm0.075364 0.01299v503.74h503.74l-251.21-253v-0.004l251.21-250.74h-503.76z',
          '',
          '',
        ],
        choices: [
          '/img/false.1.png',
          '/img/false.2.png',
          '/img/false.png',
          '/img/true.png',
        ],
        goodChoice: '/img/true.png',
      },
      {
        name: 'mongo',
        layers: [
          'm246.99 0.09375c-1.09 10.889-1.09 14.155-10.89 25.045-14.15 11.978-91.47 76.221-98 207.98s102.36 205.81 102.36 205.81c0-0.02 0.01-0.03 0.01-0.05 8.74 21.63 7.61 56.67 7.61 56.67l13.07 4.36s-3.27-35.94 1.09-52.27c1.28-5.12 3.88-9.58 6.91-13.33 4.05-2.7 115.64-78.83 88.91-234.94-27.22-116.52-89.29-154.63-95.82-168.79-7.63-9.798-14.16-28.308-14.16-28.308l0.04 2.5737c-0.35-2.2572-0.72-3.8716-1.13-4.752z',
          '',
          '',
        ],
        choices: [
          '/img/false.1.png',
          '/img/false.2.png',
          '/img/false.png',
          '/img/true.png',
        ],
        goodChoice: '/img/true.png',
      },
      {
        name: 'gitlab',
        layers: [
          'm94.27 25.783c-3.811-0.008-7.613 2.175-9.016 6.539l-55.363 170.21-27.87 85.97c-2.5557 7.8 0.2492 16.4 6.8579 21.26l241.59 175.51 241.59-175.51c6.61-4.86 9.42-13.4 6.86-21.26l-27.9-85.91-55.33-170.21c-2.81-8.788-15.21-8.788-18.08 0.003l-55.3 170.15h-183.68l-55.3-170.15c-1.43-4.393-5.25-6.589-9.06-6.597z',
          '',
          '',
        ],
        choices: [
          '/img/false.1.png',
          '/img/false.2.png',
          '/img/false.png',
          '/img/true.png',
        ],
        goodChoice: '/img/true.png',
      },
      {
        name: 'redis',
        layers: [
          'm260.32 39.318c-10.38 0.112-21.07 3.084-37.45 8.744-30.85 10.658-176.68 67.868-202.48 77.958-14.029 5.38-20.272 10.43-19.068 15.85l0.0003 49.21c0 5.05 7.2908 10.66 20.192 16.83 0.959 0.47 2.121 1.02 3.386 1.6-0.965 0.38-3.748 1.47-4.509 1.77-13.192 5.16-19.475 9.88-18.956 14.99-0.0117 0-0.67328 0.15-0.67328 0.15v50.48c0 4.97 7.1225 10.5 19.699 16.57-0.111 0.05-0.524 0.21-0.631 0.25-12.644 4.95-18.939 9.63-18.986 14.57-0.00067 0-0.08228 0.01-0.08228 0.01v50.48c0 5.05 7.2918 10.66 20.191 16.83 26.361 12.34 173.31 71.23 196.31 82.45 22.99 11.21 38.7 11.21 68.42-3.93 29.73-15.14 166.58-72.35 193.5-85.81 13.46-6.73 19.63-12.34 19.63-17.95v-49.36c-0.08-0.03-0.19-0.06-0.28-0.09-0.1-4.93-6.69-9.43-19.35-14.49 13.46-6.73 19.63-12.34 19.63-17.95v-49.35c-0.06-0.03-0.16-0.06-0.23-0.08 0.18-4.95-6.27-9.36-18.84-14.51-1.12-0.42-2.71-1.02-4.23-1.59 1.27-0.61 2.69-1.28 3.68-1.77 13.46-6.73 19.63-12.34 20.19-18.51v-49.36c-0.24-0.08-0.58-0.19-0.84-0.28-0.65-4.64-7.05-8.93-18.8-13.74-25.8-9.53-162.65-63.937-189.01-73.472-12.36-4.469-21.26-6.598-30.41-6.5z',
          '',
          '',
        ],
        choices: [
          '/img/false.1.png',
          '/img/false.2.png',
          '/img/false.png',
          '/img/true.png',
        ],
        goodChoice: '/img/true.png',
      },
    ],
  })

  // eslint-disable-next-line no-console
  console.log('[store-init]', store.toJSON())

  onPatch(store, (data) => {
    // eslint-disable-next-line no-console
    console.log('[store-patch]', data)
  })

  return store
}
