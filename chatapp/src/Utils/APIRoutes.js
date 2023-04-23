// for developement
export const host = "http://localhost:5000";

// for deployment
// export const host = "https://chatapi-production-4047.up.railway.app";

export const registerRoute = `${host}/api/register`;

export const loginRoute = `${host}/api/login`;

export const setAvatarRoute = `${host}/api/setavatar`;

export const allUsersRoute = `${host}/api/allusers`;

export const sendMessageRoute = `${host}/message/addmsg`;

export const getAllMessageRoute = `${host}/message/getallmsg`;
