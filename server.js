const express = require("express")
const actionModelDb = require("./data/helpers/actionModel.js")
const projectModelDb = require("./data/helpers/projectModel.js")
const mappersDb = require("./data/helpers/mappers.js")

const port = 7000
const server = express()
server.use(express.json())



//--------------------------------------------ROUTERS
server.get('/api/actions', (req,res) => {
    actionModelDb.get().then(actions => {       
        res.status(200).json(actions)
    }).catch(err => console.log(err))
})

server.get('/api/projects', (req,res) => {
    projectModelDb.get().then(projects => {
        res.status(200).json(projects)
    }).catch(err => console.log(err))
})

server.get('/api/projects/actions/:projectId', (req,res) => {
    const {projectId} = req.params;
    projectModelDb.getProjectActions(projectId).then(projectActions => {
        res.status(200).json(projectActions)
    }).catch(err => console.log(err))
})

server.post('/api/projects', (req,res) => {

})
server.listen(port, err => {
    if(err) console.log(err)
    console.log(`Server is running on port: ${port}`);
})