#!/usr/bin/bash

sudo apt-get upgrade -y
sudo apt-get update -y
sudo apt-get install nodejs -y
sudo apt-get clean
sudo apt-get install tty-clock -y
sudo apt-get install sox -y
sudo apt-get install jq -y
sudo apt-get install mc -y
sudo apt-get install figlet -y
sudo apt-get install wget -y
sudo apt-get install yarn
sudo apt-get install ffmpeg
sudo apt-get install libwebp -y
sudo apt-get install nodejs -y
sudo apt-get install tesseract -y
sudo apt-get install imagemagick -y
wget -O ~/../usr/share/tessdata/ind.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"
yarn

echo ":::::::::::::::::::::::::::::::::"
echo ":::::::::::::::::::::::::::::::::"
echo ":::::        EFFECT         :::::"
echo ":::::                       :::::"
echo ":::::   :::::      :::::    :::::"
echo ":::::   :::::      :::::    :::::"
echo ":::::                       :::::"
echo ":::::     ::::::::::::      :::::"
echo ":::::     ::::::::::::      :::::"
echo ":::::                       :::::"
echo ":::::::::::::::::::::::::::::::::"
echo ":::::::::::::::::::::::::::::::::"
echo "[*] JANGAN DISHARE, DI SHARE REPO INI AKAN DI HAPUS !!"
echo "[*] Made by EFFECT"
echo "[*] All dependencies have been installed, please run the command \"npm start\" to immediately start the script"
npm start
