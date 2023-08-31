import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { TiContacts } from "react-icons/ti";
import axios from "axios";
import { allallUsersRoute } from "../Utils/APIRoutes";


const Contacts = ({ contacts, currentuser, changechat, isOpen, setIsopen, allcontacts }) => {
  const [currentUsername, setcurrentUsername] = useState(undefined);
  const [currentUserimage, setcurrentUserimage] = useState(undefined);
  const [currentSelected, setcurrentSelected] = useState(undefined);
  const [search, setsearch] = useState("");



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

  // useEffect(() => {
  //   async function useeffectfunca() {
  //     const data = await axios.get(`${allallUsersRoute}/${currentUser._id}`);

  //     setcontacts(data.data);
  //   }

  //   useeffectfunca();
  // }, [search]);

  // const AllUsers = async() => {
  //   if (currentuser) {

  //     if (currentuser.isAvatarImageSet) {
  //       const data = await axios.get(`${allUsersRoute}/${currentuser._id}`);
  //       setcontacts(data.data);
  //     } else {
  //       navigate("/setavatar");
  //     }

  //   }

  // };

  return (
    <>
      {currentUsername && currentUserimage && (
        <Container>
          <div className="optionbox">
            {/* <div className="allcontacts">
              <TiContacts className="contact_icon" title="All Contacts" />
            </div> */}
            <div className="avatar">
              <img src={currentUserimage} title={currentuser.username} alt="avatar" />
            </div>
          </div>

          <div className="contactbox">
            <div className="brand">
              {/* <img src={logo} alt="Logo" /> */}
              <h2>Liffy</h2>
            </div>
            <div className="searchbox">
              <input
                className="search"
                type="text"
                onChange={(e) => setsearch(e.target.value)}
                name=""
                id=""
                placeholder="Search"
              />
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
                      <img src={contact.avatarImage} alt="avatar" />
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
          </div>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  z-index: 2;

  // .sidebar {
  display: grid;
  grid-template-columns: 20% 80%;
  // overflow: hidden;
  // background-color: #080420;
  // height: 100vh;
  // z-index: 3;
  // }

  .optionbox {
    height: 100vh;
    border-right: 1px solid #795548;
    background: #0f1430;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: flex-end;
  }

  .contactbox {
    display: grid;
    grid-template-rows: 10% 10% 85%;
    overflow: hidden;
    background-color: #080420;
    height: 100vh;
  }

  .searchbox {
    display: flex;
    align-items: center;
    justify-content: center;
  }

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

  .search {
    height: 70%;
    width: 90%;
    font-size: 1.5rem;
    text-align: center;
    background: transparent;
    border: 2px solid white;
    border-radius: 0.5rem;
    color: white;
    font-weight: bold;
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

  .optionbox {
    .avatar {
      padding: 0.45rem;
      img {
        height: 3rem;
        border: 2px solid red;
        border-radius: 100%;
        padding: 1px;
      }
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
    width: 100%;
  }

  .contact_icon {
    font-size: 2rem;
    color: white;
  }

  .contact_icon:hover {
    transform: scale(1.3);
  }
`;

export default Contacts;
