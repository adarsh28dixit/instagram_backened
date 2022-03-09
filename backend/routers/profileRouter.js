import express from 'express'
import Profile from '../models/profileModel.js'

const profileRouter = express.Router()

profileRouter.post('/profile', (req, res) => {
    const dbProfile = req.body;
    Profile.create(dbProfile, (err, data) => {
        if(err){
            res.status(400).send({msg : err.msg})
        } else{
            res.status(200).send(data)
        }
    })
})

profileRouter.get('/profile', (req, res) => {
    Profile.find((err, data) => {
        if(err){
            res.status(400).send({msg : err.msg})
        } else{
            res.status(200).send(data)
        }
    })
})

profileRouter.get('/profile/:id', (req, res) => {
    const profile = req.params.id;
    Profile.findById(profile, (err, data) => {
        if(err){
            res.status(400).send({msg : err.msg})
        } else{
            res.status(200).send(data)
        }
    })
})

profileRouter.delete('/profile/:id', (req,res) => {
    const profile = req.params.id;
    Profile.findByIdAndDelete(profile, (err, data) => {
        if(err){
            res.status(400).send({msg : err.msg})
        } else{
            res.status(200).send(data)
        }
    })
} )


profileRouter.patch('/profile/:id', async(req,res) => {
    const profile = await Profile.findById(req.params.id);
    if(profile){
        profile.name = req.body.name || profile.name;
        profile.email = req.body.email || profile.email;
        profile.mobile = req.body.mobile || profile.mobile;
        profile.country = req.body.country || profile.country;

        const updatedProfile = await profile.save()
        res.status(200).send(updatedProfile);
    } else {
        res.status(400).send({msg : err.msg})
    }
        
    
} )
export default profileRouter;