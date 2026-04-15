import { api } from "../../api/client";
import type { Resort } from "../../services/shared/model/Resort";

export function getHotels(): Promise<Resort[]> {
  return api(`/api/hotels`);
}
