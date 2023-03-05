import axios from "axios";

const APIUrl = "https://6400dc59ab6b7399d09ce778.mockapi.io/posts";

export async function getAllPosts(func) {
  try {
    const allPosts = await axios.get(APIUrl);
    if (!allPosts.statusText === "OK") {
      throw new Error("Could not get posts.");
    }
    func(allPosts.data);
  } catch (error) {
    console.error(error);
  }
}

export async function getPost(func, id) {
  try {
    const post = await axios.get(`${APIUrl}/${id}`);
    if (!post.statusText === "OK") {
      throw new Error("Could not get post");
    }
    func(post.data);
  } catch (error) {
    console.error(error);
  }
}

export async function updatePost(id, name, price, avatar, country, city, product, email) {
  try {
    const updateRequest = await axios.put(`${APIUrl}/${id}`, {
      name: name,
      price: price,
      avatar: avatar,
      country: country,
      city: city,
      item: product,
      email: email,
    });
    if (!updateRequest.statusText === "OK") {
      throw new Error("could not update post.");
    }
  } catch (error) {
    console.error(error);
  }
}

export async function deletePost(id) {
  await axios.delete(`${APIUrl}/${id}`);
}

export async function addPost(name, price, avatar, country, city, product, email) {
  await axios.post(APIUrl, {
    name: name,
    price: price,
    avatar: avatar,
    country: country,
    city: city,
    item: product,
    email: email,
  });
}
