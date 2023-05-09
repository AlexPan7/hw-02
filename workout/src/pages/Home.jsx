import { useState, useEffect } from "react";

import axios from 'axios';

import Hero from "../components/Hero"
import {PostList, PostItem} from "../components/Post"
import {SectionItem, SectionHeading, SectionTitle, SectionMoreLink} from "../components/Section"
import CTA from "../components/CTA"

export const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get('https://dummyjson.com/products')
        setPosts(res.data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchPosts();
  }, []);

  return (
    <>
      <Hero />
      <SectionItem>
        <SectionHeading>
          <SectionTitle>Popular Exercises</SectionTitle>
          <SectionMoreLink>SEE MORE EXERCISES</SectionMoreLink>
        </SectionHeading>
        <PostList>
          {posts.products && posts.products.slice(0, 6).map((post, id) => (
            <PostItem key={id} post={post}/>
          ))}
        </PostList>
      </SectionItem>
      <CTA />
    </>
  )
}
