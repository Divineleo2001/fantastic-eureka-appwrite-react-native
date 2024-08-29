import {
  Account,
  Avatars,
  Client,
  Databases,
  ID,
  Query,
} from "react-native-appwrite";
import axios from "axios";


export const config = {
  endpoint: "http://192.168.2.113:98/v1",
  platform: "com.divine.native",
  projectId: "66b1e58400289b20d4f7",
  databaseId: "66b1e877003b22a2a7ae",
  userCollectionId: "66b1e88d003971d4e044",
  videoCollectionId: "66b1e89800193313ceee",
  storageId: "66b1e8a00027c3d7c203",
};

const client = new Client();
const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

export const createUser = async (email, password, username) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );

    if (!newAccount) throw Error;

    const avatarUrl = avatars.getInitials(username);

    await signIn(email, password);

    const newUser = await databases.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        username,
        avatar: avatarUrl,
      }
    );
    return newUser;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const signIn = async (email, password) => {
  try {
    // const session = await account.createEmailPasswordSession(email, password);
//     const response = await fetch("http://192.168.2.113:8084/api/authenticate", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         username: email,
//         password: password,
//       }),
//     });
// console.log(response.data)

    const response = await axios.post(
      "http://192.168.2.113:8084/api/authenticate",
      {
        username: email,
        password: password,
      }
    )

    console.log(response.data)
    return JSON.parse(response.body);

    // return session;
  } catch (error) {
    console.log(error);
  }
};

export async function getAccount() {
  try {
    const currentAccount = await account.get();

    return currentAccount;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getCurrentUser() {
  try {
    const currentAccount = await getAccount();
    if (!currentAccount) throw Error;

    const currentUser = await databases.listDocuments(
      config.databaseId,
      config.userCollectionId,
      [Query.equal("accountId", currentAccount.$id)]
    );

    if (!currentUser) throw Error;

    return currentUser.documents[0];
  } catch (error) {
    console.log(error);
    return null;
  }
}
