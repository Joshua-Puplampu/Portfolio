import '../styles/globals.css'
import Sidebar from '../components/sidebar'

function MyApp({ Component, pageProps }) {
  return (
    <div className='grid grid-cols-12 gap-6 px-5 lg:px-48 my-14'>
      <div className='col-span-12 p-4 text-center bg-white rounded-2xl lg:col-span-3'>
        <Sidebar/>
      </div>
      <div className='col-span-12 bg-white lg:col-span-9 rounded-2xl'>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
