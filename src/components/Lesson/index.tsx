import { CheckCircle } from "phosphor-react";

export const Lesson = () => {
  return (
    <a href="https://github.com/">
      <span className="text-gray-300">Segunda • 21 de junho • 19h00</span>

      <div className="rounded border border-gray-500 p-5 mt-2">
        <header className="flex items-center justify-between">
          <span className="text-sm text-blue-500 flex items-center gap-2">
            <CheckCircle size={20} />
            Conteúdo liberado
          </span>
          <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold">
            AO VIVO
          </span>
        </header>
        <span className="text-bold text-gray-200 mt-5 block">
          Abertura do evento Ignite Lab!
        </span>
      </div>
    </a>
  );
};
