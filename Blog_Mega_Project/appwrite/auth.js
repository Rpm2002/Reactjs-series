import { Client, Account, ID } from "appwrite";
import config from "../conf/config";

export class AuthService{
  client=new Client()
  account;

  constructor(){
    this.client
      .setEndpoint(config.appwriteURL) // Your API Endpoint
      .setProject(config.appwriteProjectId); // Your project ID
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
      throw error
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
      await this.account.get()
    } catch (error) {
      throw error
    }

    return null
  }

  // logout yani delete session

  async Logout({email,password}){
    try {
      await this.account.deleteSessions()
    } catch (error) {
      throw error
    }

    return null
  }

}

const authservice =new Authservice()

export default authservice