# webrtc-intercom

This repository gives possibility to use Raspberry Pi as a smart home intercom which provides live video feed from rpi to user's browser. User can see and hear who is behind the door and also can open the door for the visitor.

On Raspberry Pi [RWS server](https://github.com/kclyu/rpi-webrtc-streamer) must be set up and running to get the video and audio feed from the rpi.

This repository is a modified version of https://github.com/kclyu/rpi-webrtc-streamer-frontend.

[Set up RWS on Raspberry Pi](https://github.com/kclyu/rpi-webrtc-streamer/blob/master/README_rws_setup.md)

[Set up front end web app](https://github.com/kclyu/rpi-webrtc-streamer-frontend/blob/master/READM_frontend_seutp.md)

Additionally, [Twilio](https://www.twilio.com/) account must be made to register a SMS-capable phone number. Also, twilio credentials must be included in Twilio config file in the proxy.

Hardware components that i used:
* [Raspberry Pi 3 Model B+](https://www.raspberrypi.org/products/raspberry-pi-3-model-b-plus/)
* [Camera Module V2](https://www.raspberrypi.org/products/camera-module-v2/)
* [Raspberry Pi 3 Micro USB Power Supply](https://www.raspberrypi.org/products/raspberry-pi-universal-power-supply/)
* Random push button switch
* [3.5mm microphone](https://www.nedis.com/product/wired-microphone-clip-35-mm-black)
* [Sound Card USB Stereo](https://www.amazon.com/Konig-Virtual-Surround-Controller-CMP-SOUNDUSB12/dp/B0019Z3NZ4)
* [Electric door strike](https://www.velleman.eu/products/view/?id=378722)
* [Electronic transformer](https://ultralight.bg/en/kanlux-08550-drift-led-3-18w)
