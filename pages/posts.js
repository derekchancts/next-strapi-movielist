import { useEffect, useState } from "react";
import Post from "../components/Post";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from 'axios';


const Posts = ({ data, numberOfPosts }) => {
  const [posts, setPosts] = useState(data);
  const [hasMore, setHasMore] = useState(true);

  
  const getMorePosts = async () => {
    const newPosts = await axios(`${process.env.API_URL}/posts?_start=${posts.length}&_limit=10`);
    setPosts((posts) => [...posts, ...newPosts.data]);
    // setPosts([...posts, ...newPosts.data]);
  };


  useEffect(() => {
    setHasMore(numberOfPosts > posts.length ? true : false);
  }, [posts]);


  return (
    <div>
      <InfiniteScroll
        dataLength={posts.length}
        next={getMorePosts}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {posts && posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </InfiniteScroll>
    </div>
  )
}


export const getServerSideProps = async() => {

  const data = await axios(`${process.env.API_URL}/posts?_limit=10`);
  // console.log(data.data)

  const numberOfPosts = await axios(`${process.env.API_URL}/posts/count`);
  // console.log(numberOfPosts.data)
  // console.log(typeof(numberOfPosts.data))

  return {
    props: {
      data: data.data,
      numberOfPosts: numberOfPosts.data
    }
  }

};


export default Posts
