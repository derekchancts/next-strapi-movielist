import styled from "@emotion/styled";


const Post = ({ post }) => {
  return (
    <PostStyled>
      <div className="body">
        <h3>{post.title}</h3>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </PostStyled>
  );
}


const PostStyled = styled.div`
  width: 100%;
  margin-top: 50px;
  overflow: hidden;
  background: #efefef;

  .body {
    padding: 20px;

    h3 {
      margin-bottom: 20px;
    }

    p {
      color: #666666;
      line-height: 1.5;
      margin-bottom: 20px;
    }

    a {
      display: inline-block;
      margin: 20px 0;
    }
  }
`;

export default Post;