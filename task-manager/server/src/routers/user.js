const express = require("express")
const User = require("./../models/user")
const router = new express.Router()
const auth = require('./../middleware/auth');

//Add new user
router.post("/users", async (req, res)=>{
    try {
        let user = new User(req.body);
        const token = await user.generateAuthToken();
        await user.save();
        res.status(201).send({user, token});
    }
    catch(err) {
        res.status(403).send(err.message)
    };
});

//Login user
router.post("/users/login", async(req, res) => {
    try {
        const user = await User.findOneByCredentials(req.body.email, req.body.password);
        const token = await user.generateAuthToken();
        res.status(200).send({user, token});
    } catch(err) {
        res.status(400).send(err.message)
    }
});

//Logout user
router.post("/users/logout", auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token != req.token;
        })
        await req.user.save()
        res.status(200).send("Logout successfull");
    } catch(e) {
        res.status(500).send(e.message)
    }
})

//Logout user from all devices
router.post("/users/logoutAll", auth, async (req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.status(200).send("Logout from all devices successfull");
    } catch(e) {
        res.status(500).send(e.message)
    }
})

//Get list of users
router.get("/users", async (req, res) => {
    try {
        let users = await User.find();
        res.status(200).send({users});
    } catch(err) {
        res.status(500).send(err.message)
    }
})

//Get own profile
router.get('/users/me', auth, async (req, res) => {
    try {
        await req.user.populate("tasks").execPopulate();
        res.send(req.user)
    } catch (err) {

    }
})

//Get profile of user by id
router.get('/users/:id', async (req, res) => {
    try {
        let user = await User.findById(req.params.id);
        await user.populate("tasks").execPopulate();
        res.send(user)
    } catch (err) {
        res.status(401).send(err.message)
    }
})

//Update own profile
router.patch('/user/me', auth, async (req, res) => {
    try {
        const user = req.user;
        const updates = ['name', 'email', 'password', 'age'];
        updates.forEach((update) => user[update] = req.body[update]);
        await user.save();
        res.status(200).send(user);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

//Delete own account
router.delete("/user/me", auth, (req, res) => {
    try {
        req.user.remove();
        res.status(200).send(req.user);
    } catch (err) {
        res.status(400).send(err.message);
    }
})

module.exports = router