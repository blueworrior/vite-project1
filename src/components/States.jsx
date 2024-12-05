import React,{useState} from 'react'
import './States.css'

let a = 0;
const title = () => {
  document.title = "TextUtels - Home"
}
const States = (props) => {
  
  const [text, setText] = useState("")
  
  const handleuppertext = () => {
    // let ut = text.upCase();
    setText(text.toUpperCase())
    console.log("uppercase clicked ");
    props.showAlert("Converted to UpperCase","success")
  }
  const handleChange = (event) => {
    a++
    console.log("Input data change")
    setText(event.target.value)
    a++
  }
  const handleclear = () =>{
    setText("");
    props.showAlert("Clear data","success")
  }
  const handlespeak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Text speech start","success")
  }
  const handlemute = () => {
    window.speechSynthesis.cancel()
    props.showAlert("Text speech pause","success")
  }
  const handlespeaktoggle = () => {
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
    const toogle = document.getElementById('toggle')
    if (toogle.textContent == "Speak") {
      toogle.innerHTML = "Stop"
      props.showAlert("Text speech start","success")
    }
    else {
      toogle.innerHTML = "Speak"
      if (toogle.innerHTML = "Speak"){
        window.speechSynthesis.cancel()
        props.showAlert("Text speech pause","success")
      }
    }
  }
  const handleinverse = () => {
    let invtext = ""
    for(let i = text.length-1;i>=0;i--){
      invtext += text[i]
    }
    setText(invtext)
    props.showAlert("Reverse the words","success")
  }
  const handlecopy = () => {
    var text = document.getElementById('textbar')
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showAlert("Data copied","success")
  }
  const handlespaces = () => {
    let newtext = text.split(/[ ]+/)
    setText(newtext.join(' '))
    props.showAlert("Remove extra spaces","success")
  }
  const handleCapital = () =>{
    const arr = text.split(" ")
    for(var i =0;i<arr.length;i++){
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
    }
    
    const newtet = arr.join(" ")
    setText(newtet)
    props.showAlert("Capitalize every first letter","success")
  }
  return (
    <div className='states'>
      <div className="searchdiv">
                <h1>Enter text to make it Capital/Lower</h1>
                <div className="searchbtn">
                    <button style={props.mode} onClick={handleuppertext}>Capital</button>
                    <button style={props.mode} onClick={ () => {setText(text.toLowerCase())
                      props.showAlert("Converted to LowerCase","success")
                    }}>Lower</button>
                    <button style={props.mode} onClick={handleclear}>clear</button>
                    <button style={props.mode} onClick={handlespeak}>Speak</button>
                    <button style={props.mode} onClick={handlemute} id="mute">Mute</button>
                    <button style={props.mode} onClick={handlespeaktoggle} id='toggle'>Speak</button>
                    <button style={props.mode} onClick={handleinverse}>Reverse</button>
                    <button style={props.mode} onClick={handlecopy}>copy</button>
                    <button style={props.mode} onClick={handlespaces}>remove space</button>
                    <button style={props.mode} onClick={handleCapital}>Capitalize</button>

                </div>
                    {/* <input id='textbar' type="text" placeholder='Enter text' value={text} onChange={handleChange}/> */}
                    <textarea id='textbar' style={props.mode} placeholder='Enter text' value={text} onChange={handleChange}/>

            </div>
            <div className="details">
                    <p>Render: {a}</p>
                    <p>{text.split(" ").filter((element) => { return element.length !=0}).length} Words and {text.length} characters</p>
                    <p>{ text.length===0?0:parseFloat((text.split(" ").length)*0.008) } minutes or {parseInt((text.split(" ").length)*0.008*60)} seconds </p>
                    <h2>Preview</h2>
                    <p>{text.length>0?`Your text: ${text}`:'Enter text in the textbar for preview '}</p>

            </div>
    </div>
  )
}

export default States
