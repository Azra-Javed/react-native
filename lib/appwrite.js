import { Account, Avatars, Client } from "react-native-appwrite";

export const client = new Client()
  .setEndpoint("https://sgp.cloud.appwrite.io/v1")
  .setProject("6a60a7e70014682e02cd")
  .setPlatform("com.azrajaved.shelfie");

export const account = new Account(client);
export const avatars = new Avatars(client);
