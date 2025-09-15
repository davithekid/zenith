import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/ui/marquee";
import Link from "next/link";
import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Davi Chagas",
    designation: "Estudante de Desenvolvimento de Sistemas",
    company: "SENAI",
    testimonial:
      "A metodologia Pomodoro me ajudou a manter o foco e organizar melhor meu tempo. Hoje consigo estudar com muito mais eficiência.",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Maria Oliveira",
    designation: "Analista de Dados",
    company: "InsightTech",
    testimonial:
      "Com a Técnica de Feynman, consigo aprender de verdade. Explicar os conteúdos para mim mesma mudou totalmente a forma como estudo.",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    id: 3,
    name: "Lucas Almeida",
    designation: "Designer UX",
    company: "DesignPro",
    testimonial:
      "Os Mapas Mentais tornaram muito mais fácil organizar minhas ideias. Agora consigo visualizar o conteúdo de forma clara e prática.",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Carla Fernandes",
    designation: "Especialista em Marketing",
    company: "BrandBoost",
    testimonial:
      "A Prática Espaçada revolucionou meus estudos. Revisar em intervalos me ajudou a fixar melhor os conteúdos e ter resultados duradouros.",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];


const Testimonial04 = () => (
  <div className="flex justify-center items-center py-12">
    <div className="h-full w-full">
      <h2
        className="text-5xl font-semibold text-center tracking-[-0.03em] px-6 text-pretty">
        Relatos de sucessos
      </h2>
      <p className="mt-3 text-center text-muted-foreground text-xl">
        Reais relatos de pessoas que usararam dos nossos templates
      </p>
      <div className="mt-14 relative">
        <div
          className="z-10 absolute left-0 inset-y-0 w-[15%] bg-linear-to-r from-background to-transparent" />
        <div
          className="z-10 absolute right-0 inset-y-0 w-[15%] bg-linear-to-l from-background to-transparent" />
        <Marquee pauseOnHover className="[--duration:20s]">
          <TestimonialList />
        </Marquee>
        <Marquee pauseOnHover reverse className="mt-0 [--duration:20s]">
          <TestimonialList />
        </Marquee>
      </div>
    </div>
  </div>
);

const TestimonialList = () =>
  testimonials.map((testimonial) => (
    <div
      key={testimonial.id}
      className="min-w-96 max-w-sm bg-accent rounded-xl p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarFallback className="text-xl font-medium bg-primary text-primary-foreground">
              {testimonial.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-lg font-semibold">{testimonial.name}</p>
            <p className="text-sm text-gray-500">{testimonial.designation}</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" asChild>
          <Link href="#" target="_blank">
            <TwitterLogo className="w-4 h-4" />
          </Link>
        </Button>
      </div>
      <p className="mt-5 text-[17px]">{testimonial.testimonial}</p>
    </div>
  ));

const TwitterLogo = (props) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <title>X</title>
    <path
      fill="currentColor"
      d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

export default Testimonial04;
