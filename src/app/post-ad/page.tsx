"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { ImageIcon } from "lucide-react";

const itmSchema = z.object({
  title: z.string().min(3, {
    message: "O título deve ter pelo menos 3 caracteres.",
  }),
  description: z.string().min(10, {
    message: "A descrição deve ter pelo menos 10 caracteres.",
  }),
  price: z.number().min(0, {
    message: "O preço deve ser um número positivo.",
  }),
  images: z
    .array(z.string())
    .max(12, {
      message: "Você pode enviar no máximo 12 imagens.",
    })
    .optional(),
  videoUrl: z.string().optional(),
});

const PostItm = () => {
  const form = useForm<z.infer<typeof itmSchema>>({
    resolver: zodResolver(itmSchema),
    defaultValues: {
      title: "",
      description: "",
      price: 0,
      images: [],
      videoUrl: "",
    },
  });

  const onSubmit = (values: z.infer<typeof itmSchema>) => {
    // Aqui você lidaria com o envio do formulário, por exemplo, enviando os dados para uma API.
    console.log(values);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Postar um Novo Anúncio</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Título</FormLabel>
                <FormControl>
                  <Input placeholder="Título do anúncio" {...field} />
                </FormControl>
                <FormDescription>
                  Insira um título descritivo para o seu anúncio.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Descrição</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Descreva o item que você está vendendo"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Forneça uma descrição detalhada do item.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preço</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="0.00"
                    {...field}
                    onChange={(e) =>
                      field.onChange(Number(e.target.value))
                    }
                  />
                </FormControl>
                <FormDescription>
                  Insira o preço que você está pedindo pelo item.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="images"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Imagens</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={(e) => {
                      if (e.target.files) {
                        const files = Array.from(e.target.files).map(
                          (file) => URL.createObjectURL(file)
                        );
                        field.onChange(files);
                      }
                    }}
                  />
                </FormControl>
                <FormDescription>
                  Envie até 12 imagens do item.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="videoUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>URL do Vídeo (YouTube, Vimeo, Facebook)</FormLabel>
                <FormControl>
                  <Input placeholder="https://www.youtube.com/watch?v=..." {...field} />
                </FormControl>
                <FormDescription>
                  Adicione um link para um vídeo mostrando o item.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">
            <ImageIcon className="mr-2 h-4 w-4" />
            Postar Anúncio
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default PostItm;
