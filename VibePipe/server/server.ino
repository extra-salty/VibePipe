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

void readLed(Request &req, Response &res) {
  res.print(ledOn);
}

void updateLed(Request &req, Response &res) {
  ledOn = (req.read() != '0');
  digitalWrite(LED_BUILTIN, ledOn);
  return readLed(req, res);
}

void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
  Serial.begin(512000);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);

  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.print(".");
  }
  Serial.println(WiFi.localIP());

  app.get("/led", &readLed);
  app.put("/led", &updateLed);
  app.use(staticFiles());
  server.begin();

  FastLED.addLeds<WS2812B, DATA_PIN, GRB>(leds, NUM_LEDS);
}

void loop() {
  WiFiClient client = server.available();

  if (client.connected()) {
    app.process(&client);
  }

  leds[0] = CHSV( 0, 255, 0);
  leds[1] = CHSV( 0, 255, 100);
  leds[2] = CHSV( 0, 255, 200);
  FastLED.show(); 
  delay(30); 
}