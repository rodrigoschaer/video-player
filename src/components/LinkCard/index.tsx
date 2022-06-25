import { CaretRight } from "phosphor-react";

import { LinkCardProps } from "./interface";

export const LinkCard = ({
  icon,
  title,
  subtitle,
}: LinkCardProps): JSX.Element => {
  return (
    <>
      <a
        href=""
        className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
      >
        <div className="bg-green-700 h-full p-6 flex items-center">{icon}</div>
        <div className="py-6 leading-relaxed">
          <strong className="text-2xl">{title}</strong>
          <p className="tex-sm tex-gray-200 mt-2">{subtitle}</p>
        </div>
        <div className="h-full p-6 flex items-center">
          <CaretRight size="24" />
        </div>
      </a>
    </>
  );
};
