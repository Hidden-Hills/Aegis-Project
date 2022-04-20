#Copyright (C) May Realities, Inc. All Rights Reserved.wd
import cv2
import numpy
import sys
import face_recognition

cap = cv2.VideoCapture(0)
percentage = "%"
#This is the image that was recieved from the camera feed.
userUploadedImg = ""
userImg = face_recognition.load_image_file(userUploadedImg)
usercvrtCLR = cv2.cvtColor(userImg, cv2.COLOR_BGR2RGB)

#This is the image that was pre-picked to be a comparison image.
compareImgUp = ""
compareImg = face_recognition.load_image_file(compareImgUp)
comparecvrtCLR = cv2.cvtColor(compareImg, cv2.COLOR_BGR2RGB)



imgElon = face_recognition.load_image_file('ImgsBasic/ElonMusk.png')
imgElon = cv2.cvtColor(imgElon, cv2.COLOR_BGR2RGB)
imgTest = face_recognition.load_image_file('ImgsBasic/ElonTest.png')
imgTest = cv2.cvtColor(imgTest, cv2.COLOR_BGR2RGB)



faceLoc = face_recognition.face_locations(imgElon)[0]
encodeElon = face_recognition.face_encodings(imgElon)[0]
cv2.rectangle(imgElon, (faceLoc[3], faceLoc[0]),(faceLoc[1], faceLoc[2]), (255, 0, 255), 2)


faceLoc = face_recognition.face_locations(imgTest)[0]
encodeTest = face_recognition.face_encodings(imgTest)[0]
cv2.rectangle(imgTest, (faceLoc[3], faceLoc[0]),(faceLoc[1], faceLoc[2]), (255, 0, 255), 2)


results = face_recognition.compare_faces([encodeElon], encodeTest)
faceDis = face_recognition.face_distance([encodeElon], encodeTest)
print(results,faceDis)
cv2.putText(imgTest, f'{results} {round(faceDis[0],2)}{percentage}', (50,50), cv2.FONT_HERSHEY_COMPLEX, 1, (101,119,179),2)

cv2.imshow('Captured Image', imgElon)
cv2.imshow('Comparison Image', imgTest)
cv2.waitKey(0)