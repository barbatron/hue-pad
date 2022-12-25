import { v3 } from "node-hue-api";
import { Api } from "node-hue-api/dist/esm/api/Api";
export const LightState = v3.lightStates.LightState;

export class HueClient {
  public constructor(public readonly api: Api) {}
  public async getConfig() {
    return await this.api.configuration.getConfiguration();
  }
  public async setLightState(
    lightId: string,
    onOff: boolean,
    ct: number,
    brightness: number
  ) {
    const lightState = new LightState().on(onOff).ct(ct).brightness(brightness);
    await this.api.lights.setLightState(lightId, lightState);
  }
}
