import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertDialogDemo } from "@/components/blocks/Dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CarouselSlides() {
  const templates = [
    {
      id: 1,
      title: "Pomodoro",
      description: "Técnica para mais foco",
      img: "https://i.redd.it/4bqvflu73ud81.png",
    },
    {
      id: 2,
      title: "Feynman",
      description: "Aprender ensinando outra pessoa",
      img: "https://blog.thenounproject.com/wp-content/uploads/2024/02/notion-header-1-1280x720.png",
    },
    {
      id: 3,
      title: "Mapas Mentais",
      description: "Organizar ideias de forma visual",
      img: "https://i.redd.it/4bqvflu73ud81.png",
    },
    {
      id: 4,
      title: "Prática Espaçada",
      description: "Revisar em intervalos para fixar melhor",
      img: "https://i.redd.it/4bqvflu73ud81.png",
    },
    {
      id: 5,
      title: "Prática Espaçada",
      description: "Revisar em intervalos para fixar melhor",
      img: "https://i.redd.it/4bqvflu73ud81.png",
    },
    {
      id: 6,
      title: "Prática Espaçada",
      description: "Revisar em intervalos para fixar melhor",
      img: "https://i.redd.it/4bqvflu73ud81.png",
    },
  ];

  return (
    <Carousel opts={{ align: "start" }} className="w-full">
      <CarouselContent>
        {templates.map((item) => (
          <CarouselItem key={item.id} className="basics-4/4 lg:basis-1/4 ">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center p-6">
                <img
                  src={item.img}
                  alt={`Slide ${item.id}`}
                  className="rounded-lg object-cover mb-2"
                />
                <AlertDialogDemo/>
              </CardContent>
              <CardFooter className="flex-col gap-2">
                <Button type="submit" className="w-full">
                  Acessar
                </Button>
              </CardFooter>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
