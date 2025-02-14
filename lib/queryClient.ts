import { QueryClient } from "@tanstack/react-query";
import { mockApi } from "./mock-data";

const defaultQueryFn = async ({ queryKey }: { queryKey: string[] }) => {
  const [endpoint] = queryKey;

  // Map endpoints to mock API functions
  switch (endpoint) {
    case "/api/properties":
      return mockApi.getProperties();
    case "/api/leads":
      return mockApi.getLeads();
    case "/api/stats":
      return mockApi.getStats();
    default:
      if (endpoint.startsWith("/api/properties/")) {
        const id = parseInt(endpoint.split("/").pop()!);
        return mockApi.getProperty(id);
      }
      throw new Error(`Unhandled query key: ${endpoint}`);
  }
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
  },
});

// Simulate API requests for mutations
export async function apiRequest(
  method: string,
  url: string,
  data?: unknown,
): Promise<Response> {
  // For now, just return success response
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}