var express = require('express')
var bodyParser = require('body-parser')


var app = express()

app.use(bodyParser.urlencoded({'extended':'true'}))
app.use(bodyParser.json())
app.use(bodyParser.json({type: 'application/vnd.api+json'}))


app.get('/', function(req, res){
  res.send('hello')
})

app.get('/:time', function(req, res){

  res.json(timeCheck(req.params.time))
})

app.listen(3000)


function timeCheck(time){
  var temp
  var returnTime = { unix: null,
                    natural: null }
  if (time == parseInt(time)){
    temp = new Date(parseInt(time * 1000))
  }else{
    temp = new Date(time)
  }
  if (temp !== "Invalid Date"){
    returnTime.unix = Math.round(temp.getTime()/1000)
    returnTime.natural = temp.toLocaleDateString()
  }
  return returnTime
}
