import 'normalize.css'
import '../styles/app.css'

function loadScript(src) {
  const js = document.createElement('script')
  js.src = src
  js.onerror = () => error.log('Failed to load script ' + src)
  document.head.appendChild(js)
}

if (process.browser) {
  if (getComputedStyle(document.body).scrollBehavior !== 'smooth') {
    loadScript(
      'https://cdnjs.cloudflare.com/ajax/libs/iamdustan-smoothscroll/0.4.0/smoothscroll.min.js',
    )
  }
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
