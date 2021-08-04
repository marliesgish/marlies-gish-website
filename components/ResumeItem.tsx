import Date from "../components/Date";
import H3 from "../components/type/H3";
import Paragraph from "../components/type/Paragraph";
import breakpoints from "../styles/breakpoints";
import DateFormatter from "./DateFormatter";

const ResumeItem = ({
  position,
  company,
  location,
  website,
  date,
  content,
}) => {
  return (
    <section>
      <div className="date-col">
        <Date>{date}</Date>
      </div>
      <div>
        <H3>
          {position}, <a href={website}>{company}</a>, {location}
        </H3>
        <Paragraph small>{content}</Paragraph>
      </div>
      <style jsx>{`
        .content {
          font-size: 14px;
        }

        @media (${breakpoints.tablet}) {
          section {
            display: flex;
          }
          .date-col {
            padding-top: 10px;
            min-width: 200px;
          }
          .content {
            font-size: 16px;
            margin-top: 6px;
          }
        }

        section + section {
          margin-top: 50px;
        }
      `}</style>
    </section>
  );
};

export default ResumeItem;
