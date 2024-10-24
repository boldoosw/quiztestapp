import User from "@/models/User";
import Product from "@/models/Product";
import connectMongoDB from "@/utils/db";
import { ITEM_PER_PAGE } from "@/lib/settings";

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");

  const sort = { _id: -1 };

  try {
    connectMongoDB();

    const count = await User.find({ email: { $regex: regex } }).count();
    const users = await User.find({
      $or: [
        { lastname: { $regex: regex } },
        { firstname: { $regex: regex } },
        { email: { $regex: regex } },
        { phone: { $regex: regex } },
      ],
    })
      .sort(sort)
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, users };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};
export const fetchAllUsers = async () => {
  try {
    connectMongoDB();

    const count = await User.find().count();
    const users = await User.find();
    return { count, users };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};
export const fetchUser = async (id) => {
  try {
    connectMongoDB();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};
export const fetchProducts = async (q, page) => {
  console.log(q);
  const regex = new RegExp(q, "i");

  try {
    connectMongoDB();
    const count = await Product.find({ title: { $regex: regex } }).count();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, products };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch products!");
  }
};

export const fetchProduct = async (id) => {
  try {
    connectMongoDB();
    const product = await Product.findById(id);
    return product;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch product!");
  }
};

// DUMMY DATA

export const cards = [
  {
    id: 1,
    title: "Total Users",
    number: 10.928,
    change: 12,
  },
  {
    id: 2,
    title: "Stock",
    number: 8.236,
    change: -2,
  },
  {
    id: 3,
    title: "Revenue",
    number: 6.642,
    change: 18,
  },
];
