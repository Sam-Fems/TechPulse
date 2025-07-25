import React from 'react'
import Comment from '../components/community/Comment'
import CommentForm from '../components/community/CommentForm'
import CreateThreadForm from '../components/community/CreateThreadForm'
import ThreadCard from '../components/community/ThreadCard'

const Community = () => {
  return (
    <>
      <Comment />
      <CommentForm />
      <CreateThreadForm />
      <ThreadCard />
    </>
  )
}

export default Community