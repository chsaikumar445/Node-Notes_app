const notes=require('./notes.js')
const chalk=require('chalk')
const yargs=require('yargs')

//create add command
 yargs.command({
  command:"add",
  describe:"add the notes",
  builder:{
    title:{
      describe:"No title",
      demandOption:true,
      type:'string'
    },
    body:{
      describe:"No body",
      demandOption:true,
      type:'string'
    }
  }, 
  handler(argv){
    notes.addNotes(argv.title,argv.body)
  }
})

// //create remove command
yargs.command({
  command:"remove",
  describe:"Remove a note",
  builder:{
    title:{
      describe:"No title",
      demandOption:true,
      type:'string'
    }
  },
  handler(argv){
      notes.removeNotes(argv.title)
  }
})

// //create list command
yargs.command({
  command:"list",
  describe:"List all the Notes",
  handler(){
    notes.listNotes()
  }
})

//create read command
yargs.command({
  command:"read",
  describe:"Read the Notes",
  builder:{
    title:{
    describe:"no title",
    demandOption:true,
    type:"string"
  }
  },
  handler(argv){
    notes.readNotes(argv.title)
  }
}

)

//add remove read list


yargs.parse()

// console.log(yargs.argv)

