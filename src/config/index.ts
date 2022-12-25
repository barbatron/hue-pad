import { HueConfig } from "./types"

const { env } = process

export const hue: HueConfig = {
  HUE_USERNAME: env.HUE_USERNAME!,
  HUE_BASE_URL: env.HUE_BASE_URL!,
}
