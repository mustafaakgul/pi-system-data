import requests
import datetime
import json
from requests.auth import HTTPBasicAuth

nowDate = datetime.date.today()
urlEpias = "https://{URL}/epias/exchange/transparency/market/day-ahead-interim-mcp?date=2019-10-6"
#urlEpias = "https://{URL}/epias/exchange/transparency/market/day-ahead-interim-mcp?date={}".format(nowDate)
headersEpias = {
    "X-IBM-Client-Id": "5c8d7d5d-cd7e-4d6b-98da-077eabd8b445",
    "accept": "application/json"
}
dates = []
values = []

responseEpias = requests.get(urlEpias, headers=headersEpias)
responseEpias = json.loads(responseEpias.text)["body"]["interimMCPList"]

'''
for x in range(0,len(responseEpias)):
    for key, value in responseEpias[x].items():
        if(key == "date"):
            dates.append(value)
        elif(key == "marketTradePrice"):
            values.append(value)
    x = x + 1
piUrl = "https://172.16.4.95/piwebapi/streams/F1DP9gA_4i5ui0aJABcUJd1W1gFgAAAAUEk0REVWUElcRVBJQVNUQUdGVVRVUkU/value"
piHeaders = {"X-Requested-With": "XMLHttpRequest", 'Content-Type': 'application/json'}

for i in range(0,len(values)):
    data = {"Timestamp": str(dates[i]), "Value": values[i],"Good": True}
    piResponse = requests.post(piUrl, headers=piHeaders, json=data, verify=False, auth=HTTPBasicAuth(r"KMT\PI4DEV", "Password1"))
    print(piResponse, values[i], dates[i])

'''