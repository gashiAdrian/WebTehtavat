// How to Make a GET Request

// import axios from "axios";
// import React from "react";

// const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

// export default function App() {
//   const [post, setPost] = React.useState(null);

//   React.useEffect(() => {
//     axios.get(baseURL).then((response) => {
//       setPost(response.data);
//     });
//   }, []);

//   if (!post) return null;

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.body}</p>
//     </div>
//   );
// }


// How to Make a POST Request


// import axios from "axios";
// import React from "react";

// const baseURL = "https://jsonplaceholder.typicode.com/posts";

// export default function App() {
//   const [post, setPost] = React.useState(null);

//   React.useEffect(() => {
//     axios.get(`${baseURL}/1`).then((response) => {
//       setPost(response.data);
//     });
//   }, []);

//   function createPost() {
//     axios
//       .post(baseURL, {
//         title: "Hello World!",
//         body: "This is a new post."
//       })
//       .then((response) => {
//         setPost(response.data);
//       });
//   }

//   if (!post) return "No post!"

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.body}</p>
//       <button onClick={createPost}>Create Post</button>
//     </div>
//   );
// }

// How to Make a PUT Request

// import axios from "axios";
// import React from "react";

// const baseURL = "https://jsonplaceholder.typicode.com/posts";

// export default function App() {
//   const [post, setPost] = React.useState(null);

//   React.useEffect(() => {
//     axios.get(`${baseURL}/1`).then((response) => {
//       setPost(response.data);
//     });
//   }, []);

//   function updatePost() {
//     axios
//       .put(`${baseURL}/1`, {
//         title: "Hello World!",
//         body: "This is an updated post."
//       })
//       .then((response) => {
//         setPost(response.data);
//       });
//   }

//   if (!post) return "No post!"

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.body}</p>
//       <button onClick={updatePost}>Update Post</button>
//     </div>
//   );
// }

// How to Make a DELETE Request

// import axios from "axios";
// import React from "react";

// const baseURL = "https://jsonplaceholder.typicode.com/posts";

// export default function App() {
//   const [post, setPost] = React.useState(null);

//   React.useEffect(() => {
//     axios.get(`${baseURL}/1`).then((response) => {
//       setPost(response.data);
//     });
//   }, []);

//   function deletePost() {
//     axios
//       .delete(`${baseURL}/1`)
//       .then(() => {
//         alert("Post deleted!");
//         setPost(null)
//       });
//   }

//   if (!post) return "No post!"

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.body}</p>
//       <button onClick={deletePost}>Delete Post</button>
//     </div>
//   );
// }

// How to Handle Errors with Axios

// import axios from "axios";
// import React from "react";

// const baseURL = "https://jsonplaceholder.typicode.com/posts";

// export default function App() {
//   const [post, setPost] = React.useState(null);
//   const [error, setError] = React.useState(null);

//   React.useEffect(() => {
//     // invalid url will trigger an 404 error
//     axios.get(`${baseURL}/asdf`).then((response) => {
//       setPost(response.data);
//     }).catch(error => {
//       setError(error);
//     });
//   }, []);
  
//   if (error) return `Error: ${error.message}`;
//   if (!post) return "No post!"

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.body}</p>
//     </div>
//   );
// }

// How to Create an Axios Instance

// import axios from "axios";
// import React from "react";

// const client = axios.create({
//   baseURL: "https://jsonplaceholder.typicode.com/posts" 
// });

// export default function App() {
//   const [post, setPost] = React.useState(null);

//   React.useEffect(() => {
//     client.get("/1").then((response) => {
//       setPost(response.data);
//     });
//   }, []);

//   function deletePost() {
//     client
//       .delete("/1")
//       .then(() => {
//         alert("Post deleted!");
//         setPost(null)
//       });
//   }

//   if (!post) return "No post!"

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.body}</p>
//       <button onClick={deletePost}>Delete Post</button>
//     </div>
//   );
// }

// How to Use the Async-Await Syntax with Axios

// import axios from "axios";
// import React from "react";

// const client = axios.create({
//   baseURL: "https://jsonplaceholder.typicode.com/posts" 
// });

// export default function App() {
//   const [post, setPost] = React.useState(null);

//   React.useEffect(() => {
//     async function getPost() {
//       const response = await client.get("/1");
//       setPost(response.data);
//     }
//     getPost();
//   }, []);

//   async function deletePost() {
//     await client.delete("/1");
//     alert("Post deleted!");
//     setPost(null);
//   }

//   if (!post) return "No post!"

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.body}</p>
//       <button onClick={deletePost}>Delete Post</button>
//     </div>
//   );
// }

// How to Create a Custom useAxios Hook

import { useAxios } from "use-axios-client";

export default function App() {
  const { data, error, loading } = useAxios({
    url: "https://jsonplaceholder.typicode.com/posts/1"
  });

  if (loading || !data) return "Loading...";
  if (error) return "Error!";

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  ) 
}