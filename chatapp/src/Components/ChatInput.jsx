import React, { useState } from "react";
import styled from "styled-components";
import { BsEmojiSmileFill } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import Picker from "emoji-picker-react"

const ChatInput = ({ handleSendMsg }) => {

    const [showEmojiPicker, setshowEmojiPicker] = useState(false)
    const [msg, setmsg] = useState("")

    const handleEmojiPicker =()=>{
        setshowEmojiPicker(!showEmojiPicker);
    }

    const handleEmojiClick = (event, emoji)=>{
        setmsg(msg+emoji.emoji);
    }


    const sendChat = (event) =>{
        event.preventDefault();
        if(msg.length>0){
            handleSendMsg(msg);
            setmsg("");
        }
    }


  return (
    <ChatInputContainer>
      <div className="emoji-container">
        <div className="emoji">
          <BsEmojiSmileFill className="emoji-icon" onClick={handleEmojiPicker} />
          {
            showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} />
          }          
        </div>
      </div>

      <form className="input-container" onSubmit={(e)=>sendChat(e)}>
        <input
          type="text"
          name="chat"
          id="chat"
          placeholder="type your message here"
          value={msg}
          onChange={(e)=>{setmsg(e.target.value)}}
          autoComplete="off"
        />
        <button type="submit">
          <IoMdSend className="chat-icon" />
        </button>
      </form>
    </ChatInputContainer>
  );
};

const ChatInputContainer = styled.div`

    display: grid;
    grid-template-columns: 5% 95%;
    align-items: center;
    justify-content: center;
    background-color: #080420;
    padding: 0 2rem;
    // padding-bottom: 0.3rem;
    // height: 12%;
    gap: 1rem;
    .emoji-container{
        display: flex;
        align-items: center;
        color: white;
        gap: 1rem;
        .emoji{
            position: relative;

            .emoji-icon{
                font-size: 1.5rem;
                color: #ffff00c8;
                cursor: pointer;
            }

            .emoji-picker-react{
                position: absolute;
                height: 20rem;
                width: 15rem;
                bottom: 2.6rem;
                background-color: #080420;
                box-shadow: 0 5px 10px #9a86f3; 
                
                
                .emoji-scroll-wrapper::-webkit-scrollbar{
                    background-color: #080420;
                    width: 5px;
                    &-thumb{
                        background-color: #9186f3;     
                    }
                }
                .emoji-categories{
                    button{
                        filter: contrast(0);
                    }
                }
                .emoji-search{
                    background-color: transparent;
                    border-color: #9186f3;
                }

                .emoji-group:before{
                    background-color: #080420;
                }
                
            }

        }
    }

    .input-container{

        display: flex;
        width: 100%;
        border-radius: 2rem;
        align-items: center;
        gap: 1rem;
        background-color: #ffffff38;

        input{
            width: 90%;
            padding: 0.5rem;
            background-color: transparent;
            color: white;
            border: none;
            padding-left: 1rem;
            font-size: 1.2rem;

            &::selection{
                background-color: #9186f3;
            }
            &:focus{
                outline: none;
            }
        }

        button{
            padding: 0.3rem 2rem;
            background-color: #9a86f3;
            border-radius: 2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border: none;
            .chat-icon{
                font-size: 1.5rem;
                color: white;
            }
        }

    }

`;

export default ChatInput;
