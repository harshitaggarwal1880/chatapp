const Message = require("../models/messageModel")

module.exports.addmsg = async (req, res, next) =>{
    try {
        const { from , to, message } = req.body;
        const data = await Message.create({
            message: {
                text: message,
            },
            users: [from, to],
            sender: from,
        });
        if(data){
            return res.json({msg:"Message added successfully"});
        }
        else{
            return res.json({msg:"Failed to add message to the database"});
        }
    } catch (error) {
        next(error);
    }
}

module.exports.getallmsg = async (req, res, next) =>{
    try {
        const { from , to } = req.body;
        const messages = await Message.find({
            users: {
                $all : [from, to],
            },
        }).sort({createdAt: 1});
        const projectMessages = messages.map((msg)=>{
            return {
                fromSelf : msg.sender.toString() === from,
                message: msg.message.text,
            };
        })

        return res.json(projectMessages);

    } catch (error) {
        next(error);
    }
}