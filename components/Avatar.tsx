import React from "react";
import Image from "next/image";

interface Props {}

const Avatar: React.FC<Props> = () => {
  return (
    <div className="avatar">
      <Image
        src="/marlies-gish.jpg"
        alt="Picture of the author"
        width={48}
        height={48}
      />
      <style jsx>{`
        .avatar {
          height: 48px;
          width: 48px;
          overflow: hidden;
          border-radius: 24px;
          border: 3px solid #228e42;
        }
      `}</style>
    </div>
  );
};

export default Avatar;
