"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { Plus, Pencil, Trash2, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Blog } from "@/shared/schema";
import { format } from "date-fns";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const categoryLabels = {
  "buying-tips": "Buying Tips",
  "real-estate-trends": "Real Estate Trends",
  "interior-design": "Interior Design",
  "legal-tips": "Legal Tips",
} as const;

const categoryColors = {
  "buying-tips": "bg-blue-100 text-blue-800",
  "real-estate-trends": "bg-purple-100 text-purple-800",
  "interior-design": "bg-pink-100 text-pink-800",
  "legal-tips": "bg-green-100 text-green-800",
} as const;

function BlogCard({ blog }: { blog: Blog }) {
  const router = useRouter();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: async () => {
      const res = await apiRequest("DELETE", `/api/blogs/${blog.id}`);
      if (!res.ok) throw new Error("Failed to delete blog post");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/blogs"] });
      toast({
        title: "Blog post deleted successfully",
      });
    },
    onError: () => {
      toast({
        title: "Failed to delete blog post",
        variant: "destructive",
      });
    },
  });

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="space-y-4">
        <div className="flex justify-between items-start">
          <Badge className={categoryColors[blog.category]}>
            {categoryLabels[blog.category]}
          </Badge>
        </div>
        <CardTitle className="text-xl">{blog.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-muted-foreground line-clamp-2">
            {blog.description}
          </p>
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <span>By {blog.author}</span>
            <span>{format(new Date(blog.publishDate), "PPP")}</span>
          </div>
          <div className="flex gap-2 mt-4">
            <Button
              className="flex-1"
              variant="outline"
              onClick={() => router.push(`/blogs/${blog.id}`)}
            >
              <Eye className="w-4 h-4 mr-2" />
              View
            </Button>
            <Button
              className="flex-1"
              variant="outline"
              onClick={() => router.push(`/blogs/${blog.id}/edit`)}
            >
              <Pencil className="w-4 h-4 mr-2" />
              Edit
            </Button>
            <Button
              className="flex-1"
              variant="outline"
              onClick={() => {
                if (
                  confirm("Are you sure you want to delete this blog post?")
                ) {
                  deleteMutation.mutate();
                }
              }}
              disabled={deleteMutation.isLoading}
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Delete
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Blogs() {
  const router = useRouter();
  const { data: blogs = [], isLoading } = useQuery<Blog[]>({
    queryKey: ["/api/blogs"],
    queryFn: async () => {
      const res = await fetch("/api/blogs");
      if (!res.ok) throw new Error("Failed to fetch blogs");
      return res.json();
    },
  });

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Blog Posts</h1>
        <Button onClick={() => router.push("/admin/blogs/new")}>
          <Plus className="w-4 h-4 mr-2" />
          Add Blog Post
        </Button>
      </div>

      {isLoading ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="h-[200px] bg-muted animate-pulse rounded-lg"
            />
          ))}
        </div>
      ) : blogs.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-lg font-semibold mb-2">No blog posts found</h3>
          <p className="text-muted-foreground mb-4">
            Add your first blog post to get started
          </p>
          <Button onClick={() => router.push("/admin/blogs/new")}>Add Blog Post</Button>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      )}
    </div>
  );
}
