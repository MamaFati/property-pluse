import { Schema, model, models } from 'mongoose';
// import { unique } from 'next/dist/build/utils';

const UserSchema = new Schema ({
    email: {
        type: String,
        unique: [true, 'Email alredy exists'],
        required: [true, 'Email is requred']
    },
    username :{
        type: String,
        required: [true, 'Username is required']
    },
    image : {
        type: String,
    },
    bookmark :[
        {
             type : Schema.Types.ObjectId,
             ref : "property",
        },
       
    ]

},{
    timestamps : true,
}
) 

const User = models.User || model('User', UserSchema);

export default User;