import { mongoose, Schema } from "mongoose";



const ConversationSchema = new Schema({
    id:{
        type: String,
        required: true,
        unique: true,

    },
    sellerId: {
        type: String,
        required: true,
        unique: true,

    },
    readBySeller: {
        type: Boolean,
        required: true,
        unique: true,

    },
    readByBuyer: {
        type: Boolean,
        required: true,
        unique: true,

    },
    lastMessage: {
        type: String,
        required: false,
    },
}, {
    timestamps: true
});


export default mongoose.model("Conversation", ConversationSchema);

