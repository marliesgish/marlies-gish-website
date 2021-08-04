interface Props {
  content: string;
}

const PostBody: React.FC<Props> = ({ content }) => {
  return (
    <div className="">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default PostBody;
