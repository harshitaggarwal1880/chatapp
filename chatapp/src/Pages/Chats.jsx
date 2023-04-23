import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { allUsersRoute,host } from "../Utils/APIRoutes";
import Contacts from "../Components/Contacts";
import Welcome from "../Components/Welcome";
import ChatContainer from "../Components/ChatContainer";
import { io } from "socket.io-client"


const Chat = () => {
  const [contacts, setcontacts] = useState([]);

  const [currentUser, setcurrentUser] = useState(undefined);

  const [currentChat, setcurrentChat] = useState(undefined);

  const navigate = useNavigate();

  const socket = useRef();

  useEffect(() => {
    async function useeffectfunc() {
      if (!localStorage.getItem("chat-app-user")) {
        navigate("/login");
      } else {
        setcurrentUser(await JSON.parse(localStorage.getItem("chat-app-user")));
      }
    }

    useeffectfunc();
  }, []);


  useEffect(() => {
    
    if(currentUser){
      socket.current = io(host);
      socket.current.emit("add-user", currentUser._id);
    }   
    
  }, [currentUser])
  

  useEffect(() => {
    async function useeffectfunca() {
      if (currentUser) {
        if (currentUser.isAvatarImageSet) {
          const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);
      
          setcontacts(data.data);
        } else {
          navigate("/setavatar");
        }
      }
    }

    useeffectfunca();
  }, [currentUser]);

  const handlechatChange = (chat) => {
    setcurrentChat(chat);
  };

  return (
    <Chats>
      <div className="container">
        <Contacts
          contacts={contacts}
          currentuser={currentUser}
          changechat={handlechatChange}
        />
        {currentChat === undefined ? (
          <Welcome currentuser={currentUser} />
        ) : (
          <ChatContainer currentchat={currentChat} currentuser={currentUser} socket={socket}/>
        )}
        
      </div>
    </Chats>
  );
};

const Chats = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: 100vh;
  weight: 100vw;
  background-color: #000000;

  .container {
    height: 90vh;
    width: 90vw;
    background-color: #00000082;
    display: grid;
    grid-template-columns: 25% 75%;

    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }

    @media screen and (max-width:500px) {
      grid-template-columns: 100%;
    }
  }
`;

export default Chat;
