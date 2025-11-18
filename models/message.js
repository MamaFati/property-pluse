import { Schema, SchemaType, model, models } from 'mongoose';
// import { unique } from 'next/dist/build/utils';

const MessageSchema = new Schema(
  {
    sender: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    recipient: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    property: {
      type: Schema.Types.ObjectId,
      ref: "Property",
      required: true,
    },
    name: {
      type: String,
      required: [true, "Name Is Required"],
    },
    email: {
      type: String,
      required: [true, "Email Is Required"],
    },
    phone :Number,
         
    body: {
      type: String,
      required: [true, "Please Write Something"],
    },
    read:{
        type: Boolean,
        default: false,
    }
  },
  {
    timestamps: true,
  }
); 

const Message = models.Message || model("Message", MessageSchema);

export default Message;