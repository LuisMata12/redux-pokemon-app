import { Pokemon } from './components/Pokemon'
import { Provider } from 'react-redux'
import { store } from './store/store'
import './App.css'

function App() {
 
  return (
    <>
      <Provider store={store}>
        <Pokemon/>
      </Provider>
    </>
  )
}

export default App
