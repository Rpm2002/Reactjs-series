import { Client, Services, ID, Databases, Storage, Query } from "appwrite";
import conf from "../conf/conf";

export class Service{
  client = new Client()
  databases
  buckets

  constructor(){
    this.client
    .setEndpoint(conf.appwriteURL)
    .setProject(conf.appwriteProjectId);
    this.databases=new Databases(this.client)
    this.buckets=new  Storage(this.client)
  }

  // Creating a post
  
  async createPost({title,content,featuredImage,status,userId}){

    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId
        })
    } catch (error) {
      console.log("Appwrite service : createPost : error",error);
    }

  } 

  // Updating a post
  
  async updatePost(slug,{title,content,featuredImage,status,userId}){

    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        })
    } catch (error) {
      console.log("Appwrite service : updatePost : error",error);
    }

  } 

  // Deleting a post
  
  async deletePost(slug){

    try {
       await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      )
        return true

    } catch (error) {
      console.log("Appwrite service : deletePost : error",error);
      return false
    }

  } 

  // get a post
  
  async getPost(slug){

    try {
       await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      )
        
    } catch (error) {
      console.log("Appwrite service : getPost : error",error);
      return false
    }

  } 

   // get posts which are active
  
   async getPosts(queries=[Query.equal("status","active")]){

    try {
       await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      )
        
    } catch (error) {
      console.log("Appwrite service : getPosts : error",error);
      return false
    }

  } 
}

const service=new Service()

export default service