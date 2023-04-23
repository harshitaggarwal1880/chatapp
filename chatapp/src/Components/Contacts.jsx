import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";

const Contacts = ({
  contacts,
  currentuser,
  changechat,
  isOpen,
  setIsopen,
}) => {
  const [currentUsername, setcurrentUsername] = useState(undefined);
  const [currentUserimage, setcurrentUserimage] = useState(undefined);
  const [currentSelected, setcurrentSelected] = useState(undefined);
  // const [toggle, settoggle] = useState(true);/

  useEffect(() => {
    if (currentuser) {
      setcurrentUsername(currentuser.username);
      setcurrentUserimage(currentuser.avatarImage);
    }
  }, [currentuser]);

  const changeCurrentChat = (index, contact) => {
    setcurrentSelected(index);
    changechat(contact);
    };

  return (
    <>
      {currentUsername && currentUserimage && (
        <Container>
          <div className="brand">
            {/* <img src={logo} alt="Logo" /> */}
            <h2>Liffy</h2>
          </div>

          <div className="contacts">
            {contacts.map((contact, index) => {
              return (
                <div
                  className={`contact ${
                    index === currentSelected ? "selected" : ""
                  }`}
                  key={index}
                  onClick={() => {
                    changeCurrentChat(index, contact);
                    setIsopen();
                  }}
                >
                  <div className="avatar">
                    {/* <img
                      src={`data:image/svg+xml;base64,${contact.avatarImage}`}
                      alt="avatar"
                    /> */}
                    <img
                      src={contact.avatarImage}
                      alt="avatar"
                    />
                  </div>
                  <div className="username">
                    <h3>{contact.username}</h3>
                  </div>
                </div>
              );
            })}
          </div>

          {/* <div className="current-user">
            <div className="avatar">
              <img
                src={`data:image/svg+xml;base64,${currentUserimage}`}
                alt="avatar" 
              />
            </div>
            <div className="username">
              <h2>{currentUsername}</h2>
            </div>
          </div> */}
          {/* </div> */}
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  z-index: 2;

  // .sidebar {
  display: grid;
  grid-template-rows: 10% 85%;
  overflow: hidden;
  background-color: #080420;
  height: 100vh;
  z-index: 3;
  // }

  .brand {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    color: white;

    img {
      height: 3rem;
    }

    h3 {
      text-transform: uppercase;
    }
  }
  .contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    gap: 0.8rem;
    overflow-x: hidden;

    scrollbar-width: thin;
    scrollbar-color: #ffffff39 transparent;

    &::-webkit-scrollbar {
      width: 0.4rem;
      &-thumb {
        background-color: #ffffff39;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }

    .contact {
      background-color: #ffffff38;
      min-height: 5rem;
      width: 90%;
      cursor: pointer;
      border-radius: 0.2rem;
      padding: 0.4rem;
      gap: 1rem;
      display: flex;
      align-items: center;
      transition: 0.5s ease-in-out;

      .avatar {
        img {
          height: 3rem;
        }
      }

      .username {

        overflow: hidden;

        h3 {
          color: white;

        }
      }
    }

    .selected {
      background-color: #9186f3;
    }
  }

  .current-user {
    background-color: #0d0d30;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    .avatar {
      img {
        height: 4rem;
        max-inline-size: 100%;
      }
    }

    .username {
      h2 {
        color: white;
      }
    }

    @media screen and (min-width: 720px) and (max-width: 1080px) {
      gap: 0.5rem;
      .username {
        h2 {
          font-size: 1rem;
        }
      }
    }
  }

  @media screen and (max-width: 500px) {
    position: absolute;
    width: 80%;
  }
`;

export default Contacts;
