import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { usePostNewsletterMutation } from "@/features/slices/Newsletter/newsletterApi.Slice";

const FormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }).max(10, {
    message: "Too long, max of 10 characters",
  }),
  email: z
    .string()
    .email({ message: "Email is invalid" })
    .min(1, { message: "Email is required" }),
});

const NewsletterForm = () => {
  const [postNewsletter, { isLoading }] = usePostNewsletterMutation();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      name: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      await postNewsletter(data)
        .unwrap()
        .then((data: any) => console.log(data));
      form.setValue("email", "");
      form.setValue("name", "");
      toast({
        title:
          "You are now subscribed to our newsletter. Good to have you onboard!",
      });
    } catch (err) {
      toast({ variant: "destructive", title: "Error occured!" });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="items-top mx-5 lg:mx-20"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="my-3">
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  className="w-full h-[36px] border-gray-600"
                  placeholder="Your Name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="my-3">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  className="w-full h-[36px] border-gray-600"
                  placeholder="Your Email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="bg-[#03579F] mt-3 lg:mt-0 w-full ms-auto"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </Form>
  );
};

export default NewsletterForm;
