let express = require('express')
let path = require('path')
let app = express()
app.get('/tree', function(request, response){
		response.sendFile(path.join(__dirname, 'tree.html'))
	}
)
app.get('/cut', function(request, response){
	response.sendFile(path.join(__dirname, 'cut.html'))
})
app.get('/leave', function(request, response){
		response.sendFile(path.join(__dirname, 'leave.html'))
	}

)
app.get('/relocate', function(request, response){
	response.sendFile(path.join(__dirname, 'relocate.html'))
}
)
app.get('/die', function(request, response){
	response.sendFile(path.join(__dirname, 'die.html'))
}
)
app.get('/bricks', function(request, response){
	response.sendFile(path.join(__dirname, 'bricks.html'))
})
app.get('/straw', function(request, response){
	response.sendFile(path.join(__dirname, 'straw.html'))
})

app.get('/conclusion', function(request, response){
	response.sendFile(path.join(__dirname, 'conclusion.html'))
})

// app.get('/bigtree', function(request, response){
// 	response.sendFile(path.join(__dirname, 'bigTree.jpg'))
// })
app.use(express.static('./'))

app.listen(8080)

