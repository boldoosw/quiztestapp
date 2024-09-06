"use server";
import { revalidatePath } from "next/cache";
import User from "@/models/User";
import ClimovQuiz from "@/models/ClimovQuiz";
import CustomQuiz from "@/models/CustomQuiz";
import HollandQuiz from "@/models/HollandQuiz";
import Lesson from "@/models/Lesson";
import MatrixQuiz from "@/models/MatrixQuiz";
import Product from "@/models/Product";
import connectMongoDB from "@/utils/db";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
// import { signIn } from "../auth";

export const addUser = async (formData) => {
  const { lastname, firstname, phone, email, password, role } =
    Object.fromEntries(formData);

  try {
    connectMongoDB();

    const salt = await bcrypt.genSalt(5);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      lastname,
      firstname,
      phone,
      email,
      password: hashedPassword,
      role,
      topic_id: "",
    });
    console.log(newUser);
    await newUser.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const updateUser = async (formData) => {
  const { id, lastname, firstname, role, topic_id } =
    Object.fromEntries(formData);

  try {
    connectMongoDB();

    const updateFields = {
      lastname,
      firstname,
      role,
      topic_id,
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

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectMongoDB();
    const existingUser = await User.findById(id);

    if (existingUser) {
      const existingClimovQuiz = await ClimovQuiz.findOne({
        email: existingUser.email,
      });
      if (existingClimovQuiz) {
        await ClimovQuiz.findByIdAndDelete(existingClimovQuiz._id);
      }

      const existingHollandQuiz = await HollandQuiz.findOne({
        email: existingUser.email,
      });
      if (existingHollandQuiz) {
        await HollandQuiz.findByIdAndDelete(existingHollandQuiz._id);
      }
      const existingCustomQuiz = await CustomQuiz.findOne({
        email: existingUser.email,
      });
      if (existingCustomQuiz) {
        await CustomQuiz.findByIdAndDelete(existingCustomQuiz._id);
      }
      const existingLesson = await Lesson.findOne({
        email: existingUser.email,
      });
      if (existingLesson) {
        await Lesson.findByIdAndDelete(existingLesson._id);
      }
      const existingMatrixQuiz = await MatrixQuiz.findOne({
        email: existingUser.email,
      });
      if (existingMatrixQuiz) {
        await MatrixQuiz.findByIdAndDelete(existingMatrixQuiz._id);
      }

      await User.findByIdAndDelete(existingUser.id);
    }
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete user!");
  }

  revalidatePath("/dashboard/users");
};

export const addProduct = async (formData) => {
  const { title, desc, price, stock, color, size } =
    Object.fromEntries(formData);

  try {
    connectMongoDB();

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
    console.log(err);
    throw new Error("Failed to create product!");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const updateProduct = async (formData) => {
  const { id, title, desc, price, stock, color, size } =
    Object.fromEntries(formData);

  try {
    connectMongoDB();

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
    throw new Error("Failed to update product!");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectMongoDB();
    await Product.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete product!");
  }

  revalidatePath("/dashboard/products");
};

// export const authenticate = async (prevState, formData) => {
//   const { username, password } = Object.fromEntries(formData);

//   try {
//     await signIn("credentials", { username, password });
//   } catch (err) {
//     if (err.message.includes("CredentialsSignin")) {
//       return "Wrong Credentials";
//     }
//     throw err;
//   }
// };
