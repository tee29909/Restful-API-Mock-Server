const userService = {
  userList: [

  ],
  lastId: 1,

  addUser: function (user) {
    user.id = this.lastId++
    this.userList.push(user)
  },
  updateUser: function (user) {
    const index = this.userList.findIndex(item => item.id === user.id)

    this.userList.splice(index, 1, user)
  },
  deleteUser: function (user) {
    const index = this.userList.findIndex(item => item.id === user.id)

    this.userList.splice(index, 1)
  },

  getUser: function () {
    return [...this.userList]
  }

}

export default userService
