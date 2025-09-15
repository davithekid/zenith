import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MailIcon, MapPinIcon, MessageCircle, PhoneIcon } from "lucide-react";
import Link from "next/link";

const Contact02Page = () => (
  <div className="flex items-center justify-center py-2">
    <div className="w-full max-w-(--breakpoint-xl) mx-auto px-6 xl:px-0">
      <b className="text-muted-foreground uppercase font-semibold text-sm">
        Nos contate
      </b>
      <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
        Envie uma mensagegem para o nosso time!
      </h2>

      <div className="mt-24 grid lg:grid-cols-2 gap-16 md:gap-10">
        <div className="hidden md:grid sm:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-12">
          {/* Email */}
          <div>
            <div className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 text-primary rounded-full">
              <MailIcon />
            </div>
            <h3 className="mt-6 font-semibold text-xl">Email</h3>
            <p className="my-2.5 text-muted-foreground">
              Nossa equipe de suporte está pronta para te ajudar.
            </p>
            <Link className="font-medium text-primary" href="mailto:suporte@meusite.com">
              suporte@meusite.com
            </Link>
          </div>

          {/* Chat ao vivo */}
          <div>
            <div className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 text-primary rounded-full">
              <MessageCircle />
            </div>
            <h3 className="mt-6 font-semibold text-xl">Chat ao vivo</h3>
            <p className="my-2.5 text-muted-foreground">
              Converse em tempo real com nossa equipe.
            </p>
            <Link className="font-medium text-primary" href="#">
              Iniciar chat
            </Link>
          </div>

          {/* Escritório */}
          <div>
            <div className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 text-primary rounded-full">
              <MapPinIcon />
            </div>
            <h3 className="mt-6 font-semibold text-xl">Escritório</h3>
            <p className="my-2.5 text-muted-foreground">
              Visite-nos e conheça nossa equipe de perto.
            </p>
            <Link
              className="font-medium text-primary"
              href="https://maps.google.com"
              target="_blank"
            >
              Rua Exemplo, 100 <br /> Cidade, Estado
            </Link>
          </div>

          {/* Telefone */}
          <div>
            <div className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 text-primary rounded-full">
              <PhoneIcon />
            </div>
            <h3 className="mt-6 font-semibold text-xl">Telefone</h3>
            <p className="my-2.5 text-muted-foreground">
              Atendimento de segunda a sexta, das 8h às 17h.
            </p>
            <Link className="font-medium text-primary" href="tel:+5511999999999">
              +55 (11) 99999-9999
            </Link>
          </div>
      </div>

      {/* Form */}
      <Card className="bg-accent shadow-none py-0">
        <CardContent className="p-6 md:p-8">
          <form>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
              <div className="col-span-2 sm:col-span-1">
                <Label htmlFor="firstName">Nome</Label>
                <Input
                  placeholder="First name"
                  id="firstName"
                  className="mt-2 bg-white h-10 shadow-none" />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <Label htmlFor="lastName">Sobrenome</Label>
                <Input
                  placeholder="Last name"
                  id="lastName"
                  className="mt-2 bg-white h-10 shadow-none" />
              </div>
              <div className="col-span-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  placeholder="Email"
                  id="email"
                  className="mt-2 bg-white h-10 shadow-none" />
              </div>
              <div className="col-span-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  placeholder="Message"
                  className="mt-2 bg-white shadow-none"
                  rows={6} />
              </div>

            </div>
            <Button className="mt-6 w-full" size="lg">
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  </div>
  </div >
);

export default Contact02Page;
