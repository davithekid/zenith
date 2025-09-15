import React from "react";

const Stats01Page = () => {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="max-w-7xl mx-auto text-center px-6">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter">
          Por que escolher nossos templates e metodologias?
        </h2>
        <p className="mt-4 text-xl text-muted-foreground">
          Pessoas que aplicaram nossas metodologias melhoraram seu desempenho nos estudos
        </p>

        <div className="mt-16 sm:mt-24 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 justify-center">
          <div className="max-w-xs mx-auto">
            <span className="text-5xl font-semibold text-primary">96%</span>
            <p className="mt-6 text-lg">
              dos estudantes dizem que conseguem focar melhor usando a técnica Pomodoro
            </p>
          </div>
          <div className="max-w-xs mx-auto">
            <span className="text-5xl font-semibold text-primary">95%</span>
            <p className="mt-6 text-lg">
              afirmam que a Técnica Feynman ajuda a aprender mais rapidamente
            </p>
          </div>
          <div className="max-w-xs mx-auto">
            <span className="text-5xl font-semibold text-primary">87%</span>
            <p className="mt-6 text-lg">
              relatam que os Mapas Mentais tornam a revisão mais eficiente
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats01Page;
