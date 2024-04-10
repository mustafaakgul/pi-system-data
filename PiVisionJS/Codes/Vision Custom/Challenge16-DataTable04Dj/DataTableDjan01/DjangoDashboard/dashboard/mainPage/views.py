from django.shortcuts import render, HttpResponse
import requests as req
import json
from requests.auth import HTTPBasicAuth

# Create your views here.

def dashboard(request):
    if request.method == "POST":
        tag = request.POST["tag"]
        print(tag)
        startTime = request.POST["startTime"]
        endTime = request.POST["endTime"]
        interval = request.POST["interval"]
        responseWebId = getTagWebID(tag)
        valueResponse = getCurrentTagValue(responseWebId)
        historicalValueResponse = getHistoricalTagValues(responseWebId, startTime, endTime, interval)
        zippedLists = zip(historicalValueResponse[1], historicalValueResponse[0])
        print(historicalValueResponse[0])
        context = {
            "data":historicalValueResponse[1],
            "timestamp":historicalValueResponse[0],
            "zippedLists":zippedLists,
            "tagName":tag
        }
        return render(request,"table.html", context= context)
    return render(request,"index.html")

def getTagWebID(tag):
    urlDatabase = "https://172.16.4.95/piwebapi/dataservers/F1DS9gA_4i5ui0aJABcUJd1W1gUEk0REVWUEk/points"
    responseAPI = req.get(url = urlDatabase, auth = HTTPBasicAuth(username= r"KMT\PI4DEV", password= "Password1"), verify=False)
    responseText = json.loads(responseAPI.text)["Items"]
    for i in range(0,len(responseText)):
        for key, value in responseText[i].items():
            if (key == "Name" and value == tag):
                webId = responseText[i]["WebId"]
    return webId

def getCurrentTagValue(webId):
    valueURL = "https://172.16.4.95/piwebapi/streams/{}/value".format(webId)
    responseForValue = req.get(url = valueURL, auth = HTTPBasicAuth(username= r"KMT\PI4DEV", password= "Password1"), verify=False)
    responseForValueText = json.loads(responseForValue.text)["Value"]
    return responseForValueText

def getHistoricalTagValues(webId, startTime, endTime, interval):
    historicalValuesinFunch = []
    historicalTimeStampsinFunch = []
    url = "https://172.16.4.95/piwebapi/streams/{}/interpolated?startTime=T-{}&endTime={}&Interval={}".format(webId, startTime, endTime, interval)
    responseHistoricalTagValue = req.get(url = url, auth = HTTPBasicAuth(username= r"KMT\PI4DEV", password= "Password1"), verify=False)
    responseHistoricalTagValueText = json.loads(responseHistoricalTagValue.text)["Items"]
    for i in range(0, len(responseHistoricalTagValueText)):
        for key, value in responseHistoricalTagValueText[i].items():
            if(key == "Value"):
                historicalValuesinFunch.append(value)
            if(key == "Timestamp"):
                historicalTimeStampsinFunch.append(value)
    return historicalValuesinFunch, historicalTimeStampsinFunch
