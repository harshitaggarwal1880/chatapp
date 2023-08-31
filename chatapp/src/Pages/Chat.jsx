import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { allUsersRoute, allallUsersRoute, host } from "../Utils/APIRoutes";
import Contacts from "../Components/Contacts";
import Welcome from "../Components/Welcome";
import ChatContainer from "../Components/ChatContainer";
import { io } from "socket.io-client";

const Chat = () => {
  const [contacts, setcontacts] = useState([]);
  const [allcontacts, setallcontacts] = useState([]);

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
    if (currentUser) {
      socket.current = io(host);
      socket.current.emit("add-user", currentUser._id);
    }
  }, [currentUser]);

  useEffect(() => {
    async function useeffectfunca() {
      if (currentUser) {
        if (currentUser.isAvatarImageSet) {
          const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);
          setcontacts(data.data);

          const alldata = await axios.get(`${allallUsersRoute}/${currentUser._id}`);
          setallcontacts(alldata.data);

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

  const [isOpen, setIsopen] = useState(true);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };

  return (
    <Chats>
      <div className="container">
        <div className="toggle" onClick={ToggleSidebar}>
          {isOpen ? (
            <i className="fa fa-close"></i>
          ) : (
            <i className="fa fa-bars"></i>
          )}
        </div>

        <div className={`sidebar ${isOpen == true ? "active" : ""}`}>
          <Contacts
            contacts={contacts}
            currentuser={currentUser}
            changechat={handlechatChange}
            setIsopen={setIsopen}
            allcontacts={allcontacts}
          />
        </div>
        {currentChat === undefined ? (
          <Welcome currentuser={currentUser} />
        ) : (
          <ChatContainer
            currentchat={currentChat}
            currentuser={currentUser}
            socket={socket}
          />
        )}

        <div
          className={`sidebar-overlay ${isOpen == true ? "active" : ""}`}
          onClick={ToggleSidebar}
        ></div>
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

  .toggle {
    display: none;
    position: absolute;
    z-index: 5;
    background: white;
    top: 2%;
    padding: 3px 6px;
    left: 5%;
    border-radius: 1vh;

    i {
      font-size: 1.2rem;
    }
  }

  .container {
    height: 100vh;
    width: 100vw;
    background-color: #00000082;
    display: grid;
    grid-template-columns: 25% 75%;

    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }

    @media screen and (max-width: 500px) {
      grid-template-columns: auto;

      .toggle {
        display: block;
      }

      .sidebar {
        width: 280px;
        box-shadow: 0px 4px 8px rgb(0 0 0 / 16%);
        background-color: #fff;
        position: fixed;
        top: 0;
        left: -100%;
        z-index: 1;
        transition: 0.5s;
      }

      .sidebar-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4);
        transition: 0.5s;
        opacity: 0;
        visibility: hidden;
      }
      .sidebar-overlay.active {
        opacity: 1;
        visibility: visible;
      }

      .active {
        left: 0;
      }
    }
  }
`;

export default Chat;
