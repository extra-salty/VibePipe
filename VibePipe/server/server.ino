#include <ESP8266WiFi.h>
#include "aWOT.h"
#include "StaticFiles.h"
#include "FastLED.h"

#define WIFI_SSID "salty"
#define WIFI_PASSWORD "salty123"
#define LED_BUILTIN 2
#define NUM_LEDS 3
#define DATA_PIN 1

WiFiServer server(80);
Application app;
bool ledOn;
CRGB leds[NUM_LEDS];

// Global HSV:
void updateGlobalHSV(Request &req, Response &res) {
  Serial.println(req.read());
  // int hue = req.read().toInt();
  fill_solid( leds, NUM_LEDS, CHSV(100,255,255));
  FastLED.show(); 
}
// ------------------------------------------------


// Onboard LED:
void updateLed(Request &req, Response &res) {
  ledOn = (req.read() != '0');
  digitalWrite(LED_BUILTIN, ledOn);
  return readLed(req, res);
}

void readLed(Request &req, Response &res) {
  res.print(ledOn);
}
// ------------------------------------------------


void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
  Serial.begin(115200);

  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.print(".");
  }
  Serial.println(WiFi.localIP());

  app.get("/led", &readLed);
  app.put("/led", &updateLed);
  app.put("/hsv", &updateGlobalHSV);

  app.use(staticFiles());
  server.begin();

  FastLED.addLeds<WS2812B, DATA_PIN, GRB>(leds, NUM_LEDS);
}

void loop() {
  WiFiClient client = server.available();

  if (client.connected()) {
    app.process(&client);
  }

}