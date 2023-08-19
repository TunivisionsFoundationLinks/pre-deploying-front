import React from "react";

const PostsPage = () => {
  return (
    <Col lg={8} className="row m-0 p-0">
      <Col sm={12}>
        <PostForm />
      </Col>
      {Posters?.map((post) => {
        return (
          <Col sm={12}>
            <PostDetailsCard
              createBy={post?.createBy}
              Disc={post?.desc}
              files={post?.content}
            />
          </Col>
        );
      })}
    </Col>
  );
};

export default PostsPage;
