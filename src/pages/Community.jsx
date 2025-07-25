import React from 'react'
import Comment from '../components/Community/Comment'
import CommentForm from '../components/Community/CommentForm'
import CreateThreadForm from '../components/Community/CreateThreadForm'
import ThreadCard from '../components/Community/ThreadCard'

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