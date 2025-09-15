import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";

export default function CarouselSlides() {
  const images = [
    { id: 1, img: "/transformers.jfif" },
    { id: 2, img: "/transformers.jfif" },
    { id: 2, img: "/transformers.jfif" },
    { id: 2, img: "/transformers.jfif" },
    { id: 2, img: "/transformers.jfif" },
    { id: 2, img: "/transformers.jfif" },
  ];

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        {images.map((item) => (
          <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <img
                    src={item.img}
                    alt={`Slide ${item.id}`}
                    className="rounded-lg object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
