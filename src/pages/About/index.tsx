import { type CommonProps } from "../../globals";
import randomId from "@/shared/utils/randomId";
import React from "react";
import mdParser from "@/shared/utils/mdParser";
import Button from "@/components/atoms/Button";
import { handleExtLink } from "@/shared/utils/handleExtLink";
import { useProfile } from "@/entities/github/model/queries";

const About: React.FC<CommonProps> = ({
  dataTestId = randomId("page-about"),
}) => {
  const { data: profile } = useProfile();
  return (
    <div
      className="container flex flex-col rounded overflow-hidden shadow-lg bg-gray-200 md:flex-row transition-all"
      data-testid={dataTestId}
    >
      <img
        src={profile?.avatar_url}
        alt={`Github Avatar`}
        className="max-h-32"
      />
      <div className="flex-1 px-6 py-4">
        <div className="font-bold text-xl mb-2">{profile?.name}</div>
        <p className="text-gray-700 text-base mt-8">
          {mdParser(profile?.bio || "none")}
        </p>
        <div className="container flex flex-col gap-4 mt-8 md:flex-row">
          <span className="flex-1">
            <Button
              icon="linkedin2"
              href="https://www.linkedin.com/in/mjgargani/"
              target="_blank"
              onClick={handleExtLink}
            >
              LinkedIn
            </Button>
          </span>
          <span className="flex-1">
            <Button
              icon="github"
              href="https://github.com/mjgargani/"
              target="_blank"
              onClick={handleExtLink}
            >
              GitHub
            </Button>
          </span>
          <span className="flex-1">
            <Button
              icon="email"
              href="mailto:mjgargani@gmail.com"
              target="_blank"
              onClick={handleExtLink}
            >
              E-mail
            </Button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
