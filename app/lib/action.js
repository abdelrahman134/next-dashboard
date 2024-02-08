"use server"
import { revalidatePath } from "next/cache"
import User from "./models/User"
import { connectToDB } from "./utils"
import { redirect } from "next/navigation"
import bcrypt from "bcrypt"
import Product from "./models/Product"
import { signIn } from "../auth"
export const addUser =async (formData)=>{
    const {username,email,password ,phone,address,isAdmin,isActive}=Object.fromEntries(formData)
    try{
        connectToDB()

        const salt = await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(password,salt)
        const newUser =new User({
            username,
            email,
            password:hashedPassword,
            phone,
            address,
            isActive,
            isAdmin

        })
  
        console.log(newUser);
        await newUser.save()

    }catch(err){
        throw new Error(err.message)
    }
    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
}
export const updateUser = async (formData) => {
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await User.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};
export const updateProduct = async (formData) => {
   const { title, desc, price, stock, color, size } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      title,
      desc,
      price,
      stock,
      color,
      size,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Product.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update user!");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const addProduct = async (formData) => {
  const { title,desc,price,stock,color,size } =
    Object.fromEntries(formData);
  try {
    connectToDB();

    const newProduct = new Product({
      title,
      desc,
      price,
      stock,
      color,
      size,
    });

    
    await newProduct.save();
  } catch (err) {
    throw new Error(err.message);
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};
export const deleteProduct = async (formData) => {
  const {id} =
    Object.fromEntries(formData);
  try {
    connectToDB();
    const del=await Product.findByIdAndDelete(id);
 

} catch (err) {
    throw new Error(err.message);
  }
  revalidatePath("/dashboard/products");

};
export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDB();
    const del = await User.findByIdAndDelete(id);
  
  } catch (err) {
    throw new Error(err.message);
  }
  revalidatePath("/dashboard/users");
};
export const authenticate =async (prevState,formData)=>{
 const { username, password } = Object.fromEntries(formData);
 

 try {
 
   await signIn("credentials", { username, password });
 } catch (err) {
//    if (err.message.includes("CredentialsSignin")) {
     return "Wrong Credentials";
   
   throw err;
 }
}