import './App.css'
import React,{useState} from 'react'
import Navbar from './components/navbar'
import States from './components/States'
import ShoppingCart from './components/Shoppingcart'
import Signin from './components/signin'
import Alert from './components/Alert'
import About from './components/about'
import { BrowserRouter, Routes, Route} from "react-router-dom"
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

function App() {
  const [showcomp, setshowcomp] = useState(false)
    const [modecircle, setmodecircle] = useState({
        left: '2px'
    })
    const [sun, setSun] = useState('sun-black.png')
    const [moon, setMoon] = useState('moon-og.png')

    const [mode, setMode] = useState({
        backgroundColor: 'bluevoilet',
        color: 'cyan'
    })
    const [mode2, setMode2] = useState({
        color: 'bluevoilet',
        backgroundColor: 'cyan'
    })

    const [alert,setAlert] = useState(null)

    const [theme,setTheme] = useState("OG")

    const handleTheme = () => {
        if(theme == 'OG'){
            let modeChange = ({
                backgroundColor: 'blueviolet',
                color: 'cyan',
                borderColor: 'cyan'
            })
            document.body.style.backgroundColor = 'cyan'
            showAlert('Light mode enable','success')
            document.body.style.color = 'black'
            setmodecircle({
                left: '2px'
            })
            setMode2({
                backgroundColor: 'cyan',
                color: 'blueviolet'
            })
            setMode(modeChange)
            setSun('sun-black.png')
            setMoon('moon-og.png')
        }
        else if(theme === 'Green'){
            setMode({
                backgroundColor: 'green',
                color: 'lightGreen',
                borderColor: 'lightgreen'
            })
            setMode2({
                backgroundColor: 'lightgreen',
                color: 'green'
            })
            setmodecircle({
                left: '2px',
                backgroundColor: 'lightgreen'
            })
            setSun('sun-black.png')
            setMoon('moon-green.png')
            showAlert('Green theme enable','success')
            document.body.style.backgroundColor = 'lightgreen'
            document.body.style.color = 'black'
        }
        else if(theme === 'Red'){
            setMode({
                backgroundColor: 'darkred',
                color: 'white',
                borderColor: 'crimson'
            })
            setMode2({
                backgroundColor: 'crimson',
                color: 'white'
            })
            setmodecircle({
                left: '2px',
                backgroundColor: 'crimson'
            })
            setSun('sun-white.png')
            setMoon('moon-red.png')
            showAlert('Red theme enable','danger')
            document.body.style.backgroundColor = 'crimson'
            document.body.style.color = 'white'
        }
        else if(theme === 'Blue'){
            setMode({
                backgroundColor: 'deepskyblue',
                color: 'darkblue',
                borderColor: 'darkblue'
            })
            setMode2({
                backgroundColor: 'darkblue',
                color: 'deepskyblue'
            })
            setmodecircle({
                left: '1.5px',
                backgroundColor: 'darkblue'
            })
            setSun('sun-white.png')
            setMoon('moon-blue.png')
            showAlert('Blue theme enable','primary')
            document.body.style.backgroundColor = 'darkblue'
            document.body.style.color = 'deepskyblue'
        }
    }

    const showAlert = (msg,type) => {
        setAlert({
            msg: msg,
            type: type,
        })
        setTimeout(() => {
            setAlert(null)
        }, 1500);
    }
    const handlecomp = ()=>{
      if(showcomp === false){
          setshowcomp(true)
        
        }

        else{
            setshowcomp(false)
            
        }
    }
    const handleMode = () => {
        if(mode.backgroundColor != 'black'){
            let modeChange = ({
                backgroundColor: 'black',
                color: 'white',
                borderColor: 'grey'
            })
            document.body.style.backgroundColor = '#242424'
            document.body.style.color = 'white'
            setmodecircle({
                left: '50%',
                backgroundColor: 'white'
            })
            setMode2({
                backgroundColor: '#242424',
                color: 'white'
            })
            setMode(modeChange)
            setSun('sun-white.png')
            setMoon('moon-black.png')
            showAlert('Dark mode enable','success')
        }
        else if(mode.backgroundColor === 'black'){
            handleTheme()
        }
    }
  return (
      <>
        <BrowserRouter>

        <Navbar title = "ANIDAY" handlecomp={handlecomp} handleMode={handleMode} mode={mode} mode2={mode2} sun={sun} moon={moon} modecircle={modecircle} theme={theme} setTheme={setTheme} handleTheme={handleTheme}/>

        <Alert alert={alert}/>

        {showcomp && <Signin handlecomp={handlecomp} mode={mode} mode2={mode2} data={showcomp}/>}

            <Routes>
                <Route path='/' element={<States mode={mode} mode2={mode2} showAlert={showAlert}/>} />

                {/* <Route path='/login' element={<Signin handlecomp={handlecomp} mode={mode} mode2={mode2} data={showcomp}/>}/> */}

                <Route path='/about' element={<About mode={mode} mode2={mode2}/> } />
            </Routes>

        </BrowserRouter>
        

      </>
  )
}

export default App;
