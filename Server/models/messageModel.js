
const mongoose = require("mongoose")

const MessageSchema = new mongoose.Schema({
    message:{
        text:{
            type: String,
        },  
    },
    users: Array,
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },
},
{
    timestamps: true,
}
);

module.exports = mongoose.model("Messages", MessageSchema);