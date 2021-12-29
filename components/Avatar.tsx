import React from "react";
import Image from "next/image";

interface Props {}

const Avatar: React.FC<Props> = () => {
  return (
    <div className="avatar">
      <Image
        src="/marlies-gish.jpg"
        alt="Picture of the author"
        width={100}
        height={100}
      />
      <style jsx>{`
        .avatar {
          height: 100px;
          width: 100px;
          overflow: hidden;
          border-radius: 60px;
          border: 3px solid #228e42;
        }
      `}</style>
    </div>
  );
};

export default Avatar;
