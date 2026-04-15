import { useQuery } from "@tanstack/react-query";
import { getHotels } from "../api";

export function useHotels() {
  return useQuery({
    queryKey: ["hotels"],
    queryFn: getHotels,
    staleTime: 60_000,
  });
}
