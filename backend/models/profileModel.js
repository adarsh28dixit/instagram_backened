import mongoose from 'mongoose'

const profileSchema = new mongoose.Schema({
    name: {type: String},
    email: {type: String},
    mobile: {type: Number},
    country: {type: String},
},
{
    timestamps: true,
})

const Profile = mongoose.model("Profile", profileSchema);

export default Profile;