<template>
  <div>
    <b-button
      variant="success"
      class="float-right"
      @click="addNewUser"
      v-b-modal.modal-from-user
    >
      Add New
    </b-button>
    <b-modal
      id="modal-from-user"
      ref="modal-from-user"
      :title="title"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="Name"
          label-for="name"
          :invalid-feedback="invalidFeedbackName"
          :valid-feedback="validFeedbackName"
          :state="stateName"
        >
          <b-form-input id="name" v-model="form.name" required></b-form-input>
        </b-form-group>

        <b-form-group
          label="Gender:"
          label-for="gender"
          :invalid-feedback="invalidFeedbackGender"
          :valid-feedback="validFeedbackGender"
          :state="stateGender"
        >
          <b-form-select
            id="gender"
            v-model="form.gender"
            :options="genderOptions"
            required
          ></b-form-select>
        </b-form-group>

        <b-card class="mt-3" header="Form Data Result">
          <pre class="m-0">{{ form }}</pre>
        </b-card>
      </form>
    </b-modal>
    <b-table striped hover :items="userList" :fields="fields">
      <template v-slot:cell(operation)="data">
        <b-button @click="editUser(data.item)">Edit</b-button>
        &nbsp;
        <b-button variant="danger" @click="delUser(data.item)">Delete</b-button>
      </template>
    </b-table>
  </div>
</template>
<script>
import userService from './UserService'
export default {
  data () {
    return {
      title: 'Register',
      form: {
        id: -1,
        name: '',
        gender: null
      },
      genderOptions: [
        { text: 'Select One', value: null },
        { value: 'M', text: 'ชาย' },
        { value: 'F', text: 'หญิง' }
      ],
      userList: [],

      fields: ['id', 'name', 'gender', 'operation']
    }
  },
  methods: {
    addNewUser: function () {
      console.log('add')
      this.title = 'Register'
      this.$bvModal.show('modal-from-user')
    },

    delUser: function (user) {
      console.log(user)
      this.$bvModal
        .msgBoxConfirm('ลบแน่นะ' + user.id, {
          title: 'Please Confirm',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'danger',
          okTitle: 'YES',
          cancelTitle: 'NO',
          footerClass: 'p-2',
          hideHeaderClose: false,
          centered: true
        })
        .then(value => {
          if (value) {
            // this.deleteUser(user)
            userService.deleteUser(user)
            this.userList = userService.getUser()
          }
        })
    },
    resetModal: function () {
      this.form = { id: -1, name: '', gender: null }
    },
    handleOk: function (bvModalEvt) {
      bvModalEvt.preventDefault()

      this.handleSubmit()
    },

    handleSubmit: function () {
      // check valid
      if (this.stateName === false || this.stateGender === false) {
        return
      }
      if (this.form.id > 0) {
        // Push valid
        // this.updateUser(this.form)
        userService.updateUser(this.form)
        this.userList = userService.getUser()
      } else {
        // this.addUser(this.form)
        userService.addUser(this.form)
        this.userList = userService.getUser()
      }

      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide('modal-from-user')
      })
    },
    editUser: function (user) {
      console.log(user)
      this.title = 'Edit User'
      this.form = { ...user }
      this.$bvModal.show('modal-from-user')
    }
    // addUser: function (user) {
    //   user.id = this.lastId++
    //   this.userList.push(user)
    // },
    // updateUser: function (user) {
    //   const index = this.userList.findIndex(item => item.id === user.id)

    //   this.userList.splice(index, 1, user)
    // },
    // deleteUser: function (user) {
    //   const index = this.userList.findIndex(item => item.id === user.id)

    //   this.userList.splice(index, 1)
    // }
  },
  computed: {
    stateName () {
      return this.form.name.length >= 2
    },
    invalidFeedbackName () {
      if (this.form.name.length > 2) {
        return ''
      } else if (this.form.name.length > 0) {
        return 'Enter at least 2 characters'
      } else {
        return 'Please enter name'
      }
    },
    validFeedbackName () {
      return this.stateName === true ? 'yes' : ''
    },

    stateGender () {
      return this.form.gender != null
    },
    invalidFeedbackGender () {
      if (this.form.gender != null) {
        return ''
      } else {
        return 'select sex'
      }
    },
    validFeedbackGender () {
      return this.stateGender === true ? 'yes' : ''
    }
  },
  mounted () {
    console.log('GG')
    this.userList = userService.getUser()
  }
}
</script>
