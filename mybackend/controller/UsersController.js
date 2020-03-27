const User = require('../models/User');
const userController = {

  addUser: (req, res) => {
    const payload = req.body
    User.create({ name: payload.name, gender: payload.gender }).then(function (user) {
      res.json(user)
    }).catch(function (err) {
      res.status(500).send(err)
    })
    // const user = new User(payload);
    // try {
    //   user.save()
    //   res.json(user)
    // }
    // catch (err){
    //   res.status(500).send(err)
    // }
    

  },
  updateUser: (req, res) => {
    const payload = req.body
    User.updateOne({ _id: payload._id }, payload).then(function (user) {
      res.json(user)
    }).catch(function (err) {
      res.status(500).send(err)
    })
  },
  deleteUser: (req, res) => {
    const { id } = req.params
    User.deleteOne({ _id: id }).then(function (user) {
      res.json(user)
    }).catch(function (err) {
      res.status(500).send(err)
    })
    

  },
  getUsers: (req, res, next) => {

    //   User.find(function (err, users) {
    //     if (err) return console.error(err);
    //     console.log(users);
    // })


    //   res.json(usersController.getUsers());
    User.find({}).then(function (users) {
      res.json(users)
    }).catch(function (err) {
      res.status(500).send(err)
    })


    // eslint-disable-next-line no-undef
    console.log(next)
  },

  getUser: (req, res, next) => {
    const { id } = req.params
    User.findById(id).then(function (user) {
      res.json(user)
    }).catch(function (err) {
      res.status(500).send(err)
    })
    // eslint-disable-next-line no-undef
    console.log(next)
  }
}

// eslint-disable-next-line no-undef
module.exports = userController
