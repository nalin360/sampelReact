
import './App.css'
import Card from './components/ui/Card'
import BluckUserLabEnv from './pages/BluckUserLabEnv'

import Form from './pages/Form'
import Form2 from './pages/Form2'
import Form3 from './pages/Form3'
import FormYup from './pages/FormYup'
import ReactFormHoock from './pages/ReactFormHoock'

function App() {

  return (
    <div className='bg-[#212121 w-screen h-screen m-0 , p-0 flex justify-center items-center'>

      <Card>
        {/* <div>Somthing</div>  */}
        {/* <BluckUserLabEnv /> */}
        {/* <ReactFormHoock/> */}
        {/* <Form3/> */}
        <FormYup/>
      </Card>
    </div>
  )
}

export default App
