const fs=require('fs')
const chalk=require('chalk')

const getNotes =()=>"Your notes is loaded"


//adds notes to notes.json
const addNotes=(title,body)=>{
  const notes = loadNotes()
  const duplicateItem=notes.find((note)=>note.title===title)
  debugger
  
  if(duplicateItem===undefined){
    const newNotes ={
      title:title,
      body: body
    }
    notes.push(newNotes)
    saveNotes(notes)
    console.log(chalk.green.bold("New Notes added !"))
  }
  else{

    console.log(chalk.red.bold("Notes title already exist !"))
  }
}


//removes notes from notes.json
const removeNotes =(title)=>{
  const notes=loadNotes()
  const newNotes = notes.filter((note)=>note.title !=title)

  if(newNotes.length < notes.length){
    saveNotes(newNotes)
    console.log(chalk.green.bold.inverse("Notes is removed!"))
  }
  else{
    console.log(chalk.red.bold.inverse("Notes doesn't exist !"))
  }
}

//list all notes in notes.json
const listNotes=()=>{
  console.log(chalk.blue("your notes"))
  const listnotes=loadNotes()
  const notes = loadNotes()
  notes.forEach(note => {
    console.log(note.title)
  });
}

//read notes from notes.json with title as argument
const readNotes =title=>{
  const notes =loadNotes()
  const findNotes =notes.find((note)=>note.title === title)
  if(findNotes){
    console.log("Title: "+chalk.green(findNotes.title))
    console.log("Body: "+findNotes.body)
  }
  else{
    console.log("Notes not exist !")
  }
}

//save notes to notes.json
const saveNotes =(notess)=>{
  const JSONdata = JSON.stringify(notess)
  fs.writeFileSync('notes.json',JSONdata)

}

//load notes.json and return object
const loadNotes = ()=>{
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON=dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }
 
}



module.exports={
  getNotes:getNotes,
  addNotes:addNotes,
  removeNotes:removeNotes,
  listNotes:listNotes,
  readNotes:readNotes
}
