import {
  DiscordLogo,
  FileArrowDown,
  FileImage,
  Lightning,
} from "phosphor-react";

import { LinkCard } from "../LinkCard";
import { Player, Youtube, DefaultUi } from "@vime/react";
import { VideoPlayerProps, GetLessonBySlugResponse } from "./interface";

import { gql, useQuery } from "@apollo/client";

import "@vime/core/themes/default.css";

const GET_LESSON_BY_SLUG = gql`
  query GetLessonBySlug($slug: String) {
    lesson(where: { slug: $slug }) {
      title
      videoId
      description
      teacher {
        bio
        avatarURL
        name
      }
    }
  }
`;

export const VideoPlayer = ({ lessonSlug }: VideoPlayerProps) => {
  const { data } = useQuery<GetLessonBySlugResponse>(GET_LESSON_BY_SLUG, {
    variables: {
      slug: lessonSlug,
    },
  });

  if (!data) {
    return (
      <div className="flex-1">
        <p>Carregando...</p>
      </div>
    );
  }

  console.log(data);

  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>
      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{data.lesson.title}</h1>
            <p className="mt-4 text-gray-200">{data.lesson.description}</p>

            <div className="flex items-center gap-4 mt-6">
              <img
                src={data.lesson.teacher.avatarURL}
                alt=""
                className="h-16 w-16 rounded-full border-2 border-blue-500"
              />

              <div className="leading-relaxed">
                <strong className="font-bold text-2xl block">
                  {data.lesson.teacher.name}
                </strong>
                <span className="text-gray-200 text-sm block">
                  {data.lesson.teacher.bio}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href=""
              className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors"
            >
              <DiscordLogo size="24" />
              Comunidade do Discord
            </a>
            <a
              href=""
              className="p-4 text-sm border border-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors"
            >
              <Lightning size="24" />
              Acesse o Desafio
            </a>
          </div>
        </div>
        <div className="gap-8 mt-20 grid grid-cols-2">
          <LinkCard
            icon={<FileArrowDown size="40" />}
            title="Material complementar"
            subtitle="Acesse o material complementar para acelerar o seu desenvolvimento"
          />
          <LinkCard
            icon={<FileImage size="40" />}
            title={"Wallpapers exclusivos"}
            subtitle={
              "Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina"
            }
          />
        </div>
      </div>
    </div>
  );
};
