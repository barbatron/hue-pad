import { load } from "ts-dotenv";

export const config = load({
  HUE_USERNAME: String,
  HUE_BRIDGE_IP: String,
});
