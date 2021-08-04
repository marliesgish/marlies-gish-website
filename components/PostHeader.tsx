import Date from "./Date";
import DateFormatter from "./DateFormatter";
import H1 from "./type/H1";

interface Props {
  title: string;
  date: string;
}

const PostHeader: React.FC<Props> = ({ title, date }) => {
  return (
    <>
      <H1>{title}</H1>
      <Date>
        Posted on <DateFormatter dateString={date} />
      </Date>

      <style jsx>{`
         {
          /* .date {
          color: rgba(0, 0, 0, 0.5);
          line-height: 1;
          font-size: 14px;
        } */
        }
      `}</style>
    </>
  );
};

export default PostHeader;
