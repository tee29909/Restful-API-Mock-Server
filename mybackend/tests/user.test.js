// const mongoose = require('mongoose');
// const { MongoMemoryServer } = require('mongodb-memory-server');

const User = require('../models/User');
const dbHandler = require('./db-handler');

beforeAll(async () => {
    await dbHandler.connect()
})
afterEach(async () => {
    await dbHandler.clearDatabase()
})
afterAll(async () => {
    await dbHandler.closeDatabase()
})

const userComplete = {
    name: "tee",
    gender: "M"
}
const userCompleteGenderM = {
    name: "tee",
    gender: "M"
}
const userCompleteGenderF = {
    name: "tee",
    gender: "F"
}
const userErrorNameEmpty = {
    name: "",
    gender: "M"
}
const userErrorName2Alpkabets = {
    name: "te",
    gender: "M"
}
const userErrorgenderInvalit = {
    name: "tee",
    gender: "a"
}
describe('User', async () => {

    it('สามารถเพิ่มUserได้ ', async () => {
        let error = null
        try {
            const user = new User(userComplete)
            await user.save()
        } catch (e) {
            error = e
        }
        expect(error).toBeNull()
    });
    it('สามารถเพิ่มUserได้ gender: M', async () => {
        let error = null
        try {
            const user = new User(userCompleteGenderM)
            await user.save()
        } catch (e) {
            error = e
        }
        expect(error).toBeNull()
    });
    it('สามารถเพิ่มUserได้ gender: F', async () => {
        let error = null
        try {
            const user = new User(userCompleteGenderF)
            await user.save()
        } catch (e) {
            error = e
        }
        expect(error).toBeNull()
    });
    it('ไมสามารถเพิ่มUserได้ เพราะ name:null ', async () => {
        let error = null
        try {
            const user = new User(userErrorNameEmpty)
            await user.save()
        } catch (e) {
            error = e
        }
        expect(error).not.toBeNull()
    });
    it('ไมสามารถเพิ่มUserได้ เพราะ name:  2ตัว', async () => {
        let error = null
        try {
            const user = new User(userErrorName2Alpkabets)
            await user.save()
        } catch (e) {
            error = e
        }
        expect(error).not.toBeNull()
    });
    it('ไมสามารถเพิ่มUserได้ เพราะ gender: ไม่ใช่ M หรือ F', async () => {
        let error = null
        try {
            const user = new User(userErrorgenderInvalit)
            await user.save()
        } catch (e) {
            error = e
        }
        expect(error).not.toBeNull()
    });

    it('ไมสามารถเพิ่มUserได้ เพราะ name:ต้องไม่ซ้ำกัน', async () => {
        let error = null
        try {
            const user1 = new User(userComplete)
            await user1.save()
            const user2 = new User(userComplete)
            await user2.save()
        } catch (e) {
            error = e
        }
        expect(error).not.toBeNull()
    });
});