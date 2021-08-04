import Date from "./Date";
import DateFormatter from "./DateFormatter";
import H1 from "./type/H1";

interface Props {
  title: string;
  date: string;
}

const PostHeader: React.FC<Props> = ({ title, date }) => {
  return (
    <div className="post-header">
      <H1>{title}</H1>
      <Date>
        <DateFormatter dateString={date} />
      </Date>

      <style jsx>{`
        .post-header {
          margin-bottom: 32px;
        }
      `}</style>
    </div>
  );
};

export default PostHeader;
