import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

export class AuthService{
  client=new Client()
  account;

  constructor(){
    this.client
      .setEndpoint(conf.appwriteURL) // Your API Endpoint
      .setProject(conf.appwriteProjectId); // Your project ID
      this.account=new Account(this.client)
  }

  // Sign Up

  async createAccount({email,password,name}){
    try {
      const userAccount=await this.account.create(ID.unique(),email,password,name)

      if(userAccount)
      {
        // return login method
        return this.Login({email,password})
      }
      else
      {
        return userAccount
      }

    } catch (error) {
      console.log(error);
    }
  }

  // Login

  async Login({email,password}){
    try {
      return await this.account.createEmailSession(email,password)
    } catch (error) {
      throw error
    }
  }

  // User already logged in hai ya nhi

  async getCurrentUser(){
    try {
      return await this.account.get()
    } catch (error) {
      console.log("Appwrite service :: getCurrentUser :: error", error);
    }

    return null
  }

  // logout yani delete session

  async Logout({email,password}){
    try {
      await this.account.deleteSessions()
    } catch (error) {
      console.log("Appwrite service :: Logout :: error", error);
    }

    return null
  }

}

const authservice =new AuthService()

export default authservice