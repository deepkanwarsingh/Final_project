import React, { useEffect, useState } from "react";
import HomePost from "../components/HomePost";
import Footer from "../components/Footer";
import axios from "axios";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import SideBar from "../components/SideBar";


const Home = () => {
  const [posts, setPosts] = useState(null);
  const [loader, setLoader] = useState(false);
  const [noResult, setNoResuslt] = useState(false);
  const  user  = useContext(UserContext);
  console.log(user)

  const fetchPost = async () => {
    setLoader(true);

    try {
      const res = await axios.get("/api/posts");

      console.log(res.data, "test");
      setPosts(res.data);

      if (res.data.length == 0) {
        setNoResuslt(true);
      } else {
        setNoResuslt(false);
      }
      setLoader(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchPost();
    console.log(posts, "tetst");
  }, []);

  return (
    <>
    
      <Navbar />
      {/* <SideBar/> */}
      

      {loader ? (
        <div className="h-[40vh] flex justify-center items-center">
          <Loader />
        </div>
      ) : !noResult ? (
        posts && posts?.map((Post) => (
          <>
            <Link to={user ? `/posts/post/${Post._id}` : "/login"}>
              <HomePost key={Post._id} post={Post} />
            </Link>
          </>
        ))
      ) : (
        <h3 className="text-center font-bold mt-16">No posts available</h3>
        
      )}
      

      
      <Footer />
    </>
  );
};

export default Home;
