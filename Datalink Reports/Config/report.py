import time
import win32com.client
import openpyxl
import datetime
import os
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase
from email.mime.text import MIMEText
from email.utils import formatdate
from email import encoders

while(True):
    try:
        dateTime = datetime.datetime.today()
        configFile = open("config.config", 'r')
        configFileLine = configFile.readline().split('=')[1].strip()
        configFiles = configFileLine.split(',')
        mail_time = configFile.readline().split('=')[1].strip()
        mail_time = mail_time.split(',')
        isActive = configFile.readline().split('=')[1].strip()
        isActive = isActive.split(',')
        configFile.close()

        if(isActive[0] == "evet"):
            print("aktif")
            send_from = "pisystem@test.com.tr"
            text = "Gün sonu raporu ektedir.\n\nBilginize,\n\n"
            server = '10.13.1.45'
            port = "25"


            def send_mail(newFileName, sentTo, subject, fileDir):
                msg = MIMEMultipart()
                msg['From'] = send_from
                msg['To'] = ", ".join(sentTo)
                msg['Date'] = formatdate(localtime = True)
                msg['Subject'] = subject
                msg.attach(MIMEText(text))
                part = MIMEBase('application', "octet-stream")
                part.set_payload(open("{}{}".format(fileDir, newFileName), "rb").read())
                encoders.encode_base64(part)
                part.add_header('Content-Disposition', 'attachment', filename=newFileName)
                msg.attach(part)

                smtp = smtplib.SMTP(server, port)
                smtp.set_debuglevel(False)
                smtp.sendmail(send_from, sentTo, msg.as_string())
                smtp.quit()
                print("Mail gönderildi!")


            for i in range(0, len(configFiles)):
                print("For'a girdi!")
                timeForSend = mail_time[i].split(':')
                print(timeForSend[0], dateTime.hour, timeForSend[1], dateTime.minute)
                if(str(timeForSend[0]) == str(dateTime.hour) and str(timeForSend[1]) == str(dateTime.minute) and str(dateTime.second) == str(0)):
                    detailFile = open(configFiles[i], 'r')
                    senToAddresses = detailFile.readline().split('=')[1].strip()
                    senToAddresses = senToAddresses.split(',')
                    filesForSend = detailFile.readline().split('=')[1].strip()
                    filesForSend = filesForSend.split(',')
                    filesForDir = detailFile.readline().split('=')[1].strip()
                    filesForDir = filesForDir.split(',')
                    saveDir = detailFile.readline().split('=')[1].strip()
                    saveDir = saveDir.split(',')
                    detailFile.close()

                    for y in range(0, len(filesForSend)):
                        if(filesForDir[y] != r"\n" and filesForSend[y] != r"\n"):
                            print("Len send files: ", len(filesForSend))
                            filename = str(filesForDir[y]) + str(filesForSend[y])
                            print("filename: ", filename)
                            xl = win32com.client.Dispatch("Excel.Application")
                            wb2 = xl.Workbooks.Open(Filename = filename, ReadOnly = 0)
                            xl.Application.Run("Basla")
                            wb2.Close(True)
                            xl.Application.Quit()
                            del xl, wb2
                            time.sleep(5)

                            wb = openpyxl.load_workbook(filename, data_only = True)

                            newFileName = str(datetime.datetime.now()).replace(':', '_') + str(filesForSend[y]) + " " + "datalink_report.xlsx"
                            wb.save(os.path.join(str(saveDir[y]), str(newFileName)))
                            send_mail(newFileName, senToAddresses, newFileName, saveDir[y])
                            #print("Mail Gönderildi")
    except Exception as e:
        logFile = open("log.txt", 'a')
        logFile.write(str(datetime.datetime.now()) + " | " + str(e) + "\n")
