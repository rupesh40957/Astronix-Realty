import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams, useLocation } from "wouter";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { insertBlogSchema, type InsertBlog, type Blog } from "@/shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { Plus, Minus, Image, Type } from "lucide-react";
import { TipTapEditor } from "@/components/ui/tiptap-editor";


function ContentSection({
  index,
  type,
  content,
  onUpdate,
  onRemove,
}: {
  index: number;
  type: "text" | "image";
  content: string;
  onUpdate: (index: number, type: "text" | "image", content: string) => void;
  onRemove: (index: number) => void;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <Select
          value={type}
          onValueChange={(value: "text" | "image") => onUpdate(index, value, content)}
        >
          <SelectTrigger className="w-[120px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="text">
              <div className="flex items-center">
                <Type className="w-4 h-4 mr-2" />
                Text
              </div>
            </SelectItem>
            <SelectItem value="image">
              <div className="flex items-center">
                <Image className="w-4 h-4 mr-2" />
                Image
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={() => onRemove(index)}
        >
          <Minus className="h-4 w-4" />
        </Button>
      </div>
      {type === "text" ? (
        <TipTapEditor
          content={content}
          onChange={(value) => onUpdate(index, type, value)}
        />
      ) : (
        <Input
          type="url"
          placeholder="Instagram image URL"
          value={content}
          onChange={(e) => onUpdate(index, type, e.target.value)}
        />
      )}
    </div>
  );
}

export default function BlogForm() {
  const { id } = useParams();
  const [_, setLocation] = useLocation();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: blog, isLoading } = useQuery<Blog>({
    queryKey: [`/api/blogs/${id}`],
    enabled: !!id,
  });

  const form = useForm<InsertBlog>({
    resolver: zodResolver(insertBlogSchema),
    defaultValues: blog || {
      title: "",
      category: "buying-tips",
      description: "",
      content: [],
      images: [],
      author: "",
      publishDate: new Date(),
      socialLinks: {}
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertBlog) => {
      const res = await apiRequest(
        id ? "PATCH" : "POST",
        id ? `/api/blogs/${id}` : "/api/blogs",
        data
      );
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/blogs"] });
      toast({
        title: `Blog ${id ? "updated" : "created"} successfully`,
      });
      setLocation("/blogs");
    },
  });

  const onAddContent = () => {
    const currentContent = form.getValues("content");
    form.setValue("content", [
      ...currentContent,
      { type: "text", content: "" }
    ]);
  };

  const onUpdateContent = (index: number, type: "text" | "image", content: string) => {
    const currentContent = form.getValues("content");
    const updatedContent = [...currentContent];
    updatedContent[index] = { type, content };
    form.setValue("content", updatedContent);
  };

  const onRemoveContent = (index: number) => {
    const currentContent = form.getValues("content");
    form.setValue(
      "content",
      currentContent.filter((_, i) => i !== index)
    );
  };

  if (id && isLoading) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8">
        {id ? "Edit Blog" : "Create Blog"}
      </h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit((data) => mutation.mutate(data))} className="space-y-6">
          {/* Basic Details */}
          <Card>
            <CardHeader>
              <CardTitle>Basic Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="buying-tips">Buying Tips</SelectItem>
                        <SelectItem value="real-estate-trends">Real Estate Trends</SelectItem>
                        <SelectItem value="interior-design">Interior Design</SelectItem>
                        <SelectItem value="legal-tips">Legal Tips</SelectItem>
                      </SelectContent>
                    </Select>
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
                      <Textarea {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="author"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Author</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="publishDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Publish Date</FormLabel>
                    <Calendar
                      mode="single"
                      selected={new Date(field.value)}
                      onSelect={(date) => field.onChange(date)}
                      className="rounded-md border"
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          {/* Content Sections */}
          <Card>
            <CardHeader>
              <CardTitle>Content</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <div className="space-y-4">
                      {field.value.map((section, index) => (
                        <ContentSection
                          key={index}
                          index={index}
                          type={section.type}
                          content={section.content}
                          onUpdate={onUpdateContent}
                          onRemove={onRemoveContent}
                        />
                      ))}
                      <Button
                        type="button"
                        variant="outline"
                        className="w-full"
                        onClick={onAddContent}
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Add Content Section
                      </Button>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          {/* Images */}
          <Card>
            <CardHeader>
              <CardTitle>Images</CardTitle>
            </CardHeader>
            <CardContent>
              <FormField
                control={form.control}
                name="images"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Instagram Image Links</FormLabel>
                    <FormControl>
                      <div className="space-y-2">
                        {field.value.map((url, index) => (
                          <div key={index} className="flex gap-2">
                            <Input
                              value={url}
                              onChange={(e) => {
                                const newUrls = [...field.value];
                                newUrls[index] = e.target.value;
                                field.onChange(newUrls);
                              }}
                              placeholder="Instagram image URL"
                            />
                            <Button
                              type="button"
                              variant="outline"
                              size="icon"
                              onClick={() => {
                                field.onChange(field.value.filter((_, i) => i !== index));
                              }}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                        <Button
                          type="button"
                          variant="outline"
                          className="w-full"
                          onClick={() => {
                            field.onChange([...field.value, ""]);
                          }}
                        >
                          <Plus className="h-4 w-4 mr-2" />
                          Add Image
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          {/* Social Media Links */}
          <Card>
            <CardHeader>
              <CardTitle>Social Media Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="socialLinks.facebook"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Facebook</FormLabel>
                    <FormControl>
                      <Input {...field} type="url" placeholder="https://facebook.com/..." />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="socialLinks.twitter"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Twitter</FormLabel>
                    <FormControl>
                      <Input {...field} type="url" placeholder="https://twitter.com/..." />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="socialLinks.linkedin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>LinkedIn</FormLabel>
                    <FormControl>
                      <Input {...field} type="url" placeholder="https://linkedin.com/..." />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="socialLinks.instagram"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Instagram</FormLabel>
                    <FormControl>
                      <Input {...field} type="url" placeholder="https://instagram.com/..." />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          <div className="flex justify-end gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setLocation("/blogs")}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={mutation.isPending}>
              {mutation.isPending ? "Saving..." : "Save Blog"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}