import requests
import datetime
import json
from requests.auth import HTTPBasicAuth
import time

username = "test\{USER}"
password = "{PASS}"

while(True):
    try:
        datetime4write = datetime.datetime.today()
        tomorrow = datetime.timedelta(days=1)
        nowDate = datetime.date.today()
        #(datetime4write.hour == 15 and datetime4write.minute == 0) or (datetime4write.hour == 23 and datetime4write.minute == 0)
        if(datetime4write.hour == 15 and datetime4write.minute == 0) or (datetime4write.hour == 23 and datetime4write.minute == 0):
            urlEpias4ptf = "https://{URL}/epias/exchange/transparency/market/day-ahead-interim-mcp?date={}".format(nowDate+tomorrow)
            headersEpias = {
                "X-IBM-Client-Id": "0b9c4b12-5b76-498d-9c60-fd4a59a5f308",
                "accept": "application/json"
            }
            dates4ptf = []
            values4ptf = []
            responseEpias4ptf = requests.get(urlEpias4ptf, headers=headersEpias)
            responseEpias4ptf = json.loads(responseEpias4ptf.text)["body"]["interimMCPList"]
            for x in range(0,len(responseEpias4ptf)):
                for key, value in responseEpias4ptf[x].items():
                    if(key == "date"):
                        dates4ptf.append(value)
                    elif(key == "marketTradePrice"):
                        values4ptf.append(value)

            piUrl4ptf = "https://10.13.63.231/piwebapi/streams/F1DPQR5IsPYQeE6cAqXLv9u12Q5SYAAAU1JWRE5aUElEQVRBXDExREMwMV9FTkVSR1lfRVBJQVNfR09QX1BURg/value"
            piHeaders4ptf = {"X-Requested-With": "XMLHttpRequest", 'Content-Type': 'application/json'}

            for i in range(0,len(values4ptf)):
                data = {"Timestamp": str(dates4ptf[i]), "Value": values4ptf[i],"Good": True}
                piResponse4ptf = requests.post(piUrl4ptf, headers=piHeaders4ptf, json=data, verify=False, auth=HTTPBasicAuth(username, password))
                #print(piResponse4ptf, values4ptf[i], dates4ptf[i])
                #print("ptf")

    #datetime4write.hour == 8 and datetime4write.minute == 0
        ####################################################################
        if(datetime4write.hour == 8 and datetime4write.minute == 0):
            urlEpias4smf = "https://{URL}/epias/exchange/transparency/market/smp?startDate={}&endDate={}".format(nowDate-tomorrow, nowDate-tomorrow)
            headersEpias = {
                "X-IBM-Client-Id": "0b9c4b12-5b76-498d-9c60-fd4a59a5f308",
                "accept": "application/json"
            }
            dates4smf = []
            values4smf = []

            responseEpias4smf = requests.get(urlEpias4smf, headers=headersEpias)
            responseEpias4smf = json.loads(responseEpias4smf.text)["body"]["smpList"]
            for x in range(0,len(responseEpias4smf)):
                for key, value in responseEpias4smf[x].items():
                    if(key == "date"):
                        dates4smf.append(value)
                    elif(key == "price"):
                        values4smf.append(value)

            piUrl4smf = "https://10.13.63.231/piwebapi/streams/F1DPQR5IsPYQeE6cAqXLv9u12Q5CYAAAU1JWRE5aUElEQVRBXDExREMwMV9FTkVSR1lfRVBJQVNfREdQX1NNRg/value"
            piHeaders4smf = {"X-Requested-With": "XMLHttpRequest", 'Content-Type': 'application/json'}

            for i in range(0,len(values4smf)):
                data = {"Timestamp": str(dates4smf[i]), "Value": values4smf[i],"Good": True}
                piResponse = requests.post(piUrl4smf, headers=piHeaders4smf, json=data, verify=False, auth=HTTPBasicAuth(username, password))
                #print(piResponse, values4smf[i], dates4smf[i])
                #print("smf")

    #datetime4write.day == 20 and datetime4write.hour == 8 and datetime4write.minute == 0'''
        #############################################
        if(datetime4write.day == 20 and datetime4write.hour == 8 and datetime4write.minute == 0):
            today = datetime.date.today()
            first = today.replace(day=1)
            lastMonth = first - datetime.timedelta(days=1)
            lastMonth = lastMonth.replace(day=1)
            urlEpias4yekdem = "https://{URL}/epias/exchange/transparency/production/renewable-sm-unit-cost?startDate={}&endDate={}".format(lastMonth,lastMonth)
            print(urlEpias4yekdem)
            headersEpias = {
                "X-IBM-Client-Id": "0b9c4b12-5b76-498d-9c60-fd4a59a5f308",
                "accept": "application/json"
            }
            dates4yekdem = []
            values4yekdem = []

            responseEpias4yekdem = requests.get(urlEpias4yekdem, headers=headersEpias)
            responseEpias4yekdem = json.loads(responseEpias4yekdem.text)["body"]["renewableSMUnitCostList"]
            donem = responseEpias4yekdem[0]["id"]
            for x in range(0,len(responseEpias4yekdem)):
                for key, value in responseEpias4yekdem[x]["id"].items():
                    if(key == "donem"):
                        dates4yekdem.append(value)
                    
            for x in range(0,len(responseEpias4yekdem)):
                for key, value in responseEpias4yekdem[x].items():
                    
                    if(key == "unitCost"):
                        values4yekdem.append(value)  

            piUrl4yekdem = "https://10.13.63.231/piwebapi/streams/F1DPQR5IsPYQeE6cAqXLv9u12Q5iYAAAU1JWRE5aUElEQVRBXDExREMwMV9FTkVSR1lfRVBJQVNfWUVLREVN/value"
            piHeaders4yekdem = {"X-Requested-With": "XMLHttpRequest", 'Content-Type': 'application/json'}

            for i in range(0,len(values4yekdem)):
                data = {"Timestamp": str(dates4yekdem[i]), "Value": values4yekdem[i],"Good": True}
                piResponse = requests.post(piUrl4yekdem, headers=piHeaders4yekdem, json=data, verify=False, auth=HTTPBasicAuth(username, password))
                #print(piResponse, values4yekdem[i], dates4yekdem[i])
                #print("yekdem")
        #print("Uyuyor...")
        time.sleep(0.01)
    except Exception as e:
        fileDir = "log.txt"
        openFile = open(fileDir, 'a')
        openFile.write(str(datetime.datetime.now()) + "  |  " + str(e))
    
