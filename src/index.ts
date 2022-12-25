import { connect, discoverAndCreateUser } from "./services/hue/helpers";
import { config } from "./config";
import { LightState } from "./services/hue";

async function testHue() {
  const hueClient = await connect(config.HUE_USERNAME, config.HUE_BRIDGE_IP);
  const bridgeConfig = await hueClient.getConfig();
  console.log("Connected to Bridge: ", bridgeConfig.name);
  console.log("Fetching lights");
  const lights = await hueClient.api.lights.getAll();
  const deskRight = lights.find((l) => /desk right/i.test(l.name));
  if (!deskRight) {
    console.warn("Unable to find desk right. Here are all lights:");
    console.log(lights.map((l) => l.name));
    return;
  }
  await hueClient.api.lights.setLightState(
    deskRight.id,
    new LightState()
      .on()
      .hue(Math.floor(Math.random() * 65535))
      .brightness(100)
      .transition(1000)
  );
}

console.log("Starting");

testHue().catch((err) => console.error(err as any));
