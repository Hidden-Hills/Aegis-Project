#At the absolute start of this business idea, I wanted to work on street cameras. Hence why this files exists.

#Also, I had just started working with the OpenCV Library, so yes....this is code from a Tutorial, slightly edited.

import cv2


frameWidth = 640
frameHeight = 480
lPlateCasacade = cv2.CascadeClassifier("Resources/haarcasacade_russian_plate_number.xml")
minArea = 500
color = (255,0,255)
count = 0
cap = cv2.VideoCapture(0)
cap.set = (3, frameWidth)
cap.set = (4, frameHeight)
cap.set(10,150)


while True:

    success, img = cap.read()
    imgGray = cv2.cvtColor(img, cv2.COLOR_BAYER_BG2GRAY)
    licensePlates = lPlateCasacade.dectectMultiScale(imgGray, 1.1, 4)
    for (x, y, w, h) in licensePlates:
        area = w*h
        if area >minArea:
            cv2.rectangle(img, (x,y), (x + w, y + h), (255, 0, 255), 2)
            cv2.putText(img, "License Plate", x,y-5, cv2.FONT_HERSHEY_PLAIN,1,color,2)
            imgRoi = img[y:y+h, x:x+w]
            cv2.imshow("Focused", imgRoi)


    cv2.imshow("Result", img)
    if cv2.waitKey(1) & 0xFF == ord('s'):
        cv2.imwrite("Resources/Scanned/#Plate_ "+str(count)+".png",imgRoi)
        cv2.rectangle(img,(0,200),(640,300),(0,255,0),cv2.FILLED)
        cv2.putText(img,"Scan Saved",(150,255),cv2.FONT_HERSHEY_COMPLEX,2,(0,0,255),2)
        cv2.imshow("Focused",img)
        cv2.waitKey(500)
        count +=1  