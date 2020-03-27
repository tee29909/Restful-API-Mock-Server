var express = require('express');
var router = express.Router();

// mock data
const products = [
  {
    id: 1001,
    name: 'Node.js for Beginners',
    category: 'Node',
    price: 990
  },
  {
    id: 1002,
    name: 'React 101',
    category: 'React',
    price: 3990
  },
  {
    id: 1003,
    name: 'Getting started with MongoDB',
    category: 'MongoDB',
    price: 1990
  }
]

router.get('/', (req, res, next) => {
 
  res.json(products)
  console.log(next)
})

router.get('/:id', (req, res,next) => {
  const { id } = req.params
  
  const result = products.find(product => product.id === parseInt(id))
  res.json(result)
  console.log(next)
})





router.post('/', (req, res,next) => {
  const payload = req.body
  products.push(payload)
  res.json(payload)
  console.log(next)
})

router.put('/', (req, res,next) => {
  
  const payload = req.body
  const index = products.findIndex(product => product.id === payload.id)
  products.splice(index,1,payload)
  res.json(payload)
  console.log(next)
})

router.delete('/:id', (req, res, next) => {


  const { id } = req.params
  const index = products.findIndex(product => product.id === parseInt(id))
  products.splice(index, 0)
  res.json({ id })
  console.log(next)
})

// router.listen(9000, () => {
//   console.log('Application is running on port 9000')
// })

module.exports = router;