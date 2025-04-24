
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

const adSchema = z.object({
  title: z.string().min(3, {
    message: "Title must be at least 3 characters.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  price: z.number().min(0, {
    message: "Price must be a positive number.",
  }),
  images: z
    .array(z.string())
    .max(12, {
      message: "You can upload a maximum of 12 images.",
    })
    .optional(),
  videoUrl: z.string().optional(),
});

const PostAd = () => {
  const form = useForm<z.infer<typeof adSchema>>({
    resolver: zodResolver(adSchema),
    defaultValues: {
      title: "",
      description: "",
      price: 0,
      images: [],
      videoUrl: "",
    },
  });

  const onSubmit = (values: z.infer<typeof adSchema>) => {
    // Here you would handle the form submission, e.g., sending the data to an API.
    console.log(values);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Post a New Ad</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Ad title" {...field} />
                </FormControl>
                <FormDescription>
                  Enter a descriptive title for your ad.
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
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe the item you are selling"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Provide a detailed description of the item.
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
                <FormLabel>Price</FormLabel>
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
                  Enter the price you are asking for the item.
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
                <FormLabel>Images</FormLabel>
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
                  Upload up to 12 images of the item.
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
                <FormLabel>Video URL (YouTube, Vimeo, Facebook)</FormLabel>
                <FormControl>
                  <Input placeholder="https://www.youtube.com/watch?v=..." {...field} />
                </FormControl>
                <FormDescription>
                  Add a link to a video showcasing the item.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">
            <ImageIcon className="mr-2 h-4 w-4" />
            Post Ad
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default PostAd;
