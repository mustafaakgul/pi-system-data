
# from zeep import Client

# from zeep.transports import Transport

# import datetime

# from requests.auth import HTTPBasicAuth




# client = Client("http://srvapplive1.test.local:8000/sap/bc/srt/wsdl/flv_10002A111AD1/bndg_url/sap/bc/srt/rfc/sap/zocsd_ossoft/400/zocsd_osisoft/zocsd_osisoft?sap-client=400",

# transport=Transport(http_auth=HTTPBasicAuth(user, password)))

# result = client.service.Tarih(str(datetime.date.now()))

 

# print(result)

 

# from zeep import Client

# from zeep.wsse.username import UsernameToken

# import datetime

 

# client = Client("http://srvapplive1.test.local:8000/sap/bc/srt/wsdl/flv_10002A111AD1/bndg_url/sap/bc/srt/rfc/sap/zocsd_ossoft/400/zocsd_osisoft/zocsd_osisoft?sap-client=400",

# wsse=UsernameToken("RFCOSI", "Cmnto2!"))

 

# result = client.service.Tarih(str(datetime.date.now()))

 

# print(result)

 

from requests import Session

from requests.auth import HTTPBasicAuth  # or HTTPDigestAuth, or OAuth1, etc.

from zeep import Client

from zeep.transports import Transport

import json, requests

from requests.auth import HTTPBasicAuth

import datetime, time

import urllib3

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

 

while(True):

 

    try:

        user = "xxx"

        password = "xxxx"

        today = datetime.date.today()

 

        #print (today)

 

        session = Session()

        session.auth = HTTPBasicAuth(user, password)

        client = Client('http://srvapplive1.test.local:8000/sap/bc/srt/wsdl/flv_10002A111AD1/bndg_url/sap/bc/srt/rfc/sap/zocsd_ossoft/400/zocsd_osisoft/zocsd_osisoft?sap-client=400',

        transport=Transport(session=session))

 

        result = client.service.ZocsdFg020001(str(datetime.date.today()))

                                

        #result = client.service.ZocsdFg020001(str("2020-12-02"))

 

        #print(result)

 

        # result = json.dumps(str(result[0]))

 

        # result = json.loads(result)

 

        # result = result.replace("\'", "\"")

 

        # #result = json.loads(result)

 

        tags = []

        tesisKodlari =[]

        dagitimKanallari = []

        urunTipleri=[]

        teslimTipleri = []

        miktarlar = []

 

        y = 0

 

        for urun in result:

            

            tesisKodlari.append(urun['TesisKodu'])

            dagitimKanallari.append(urun['DagitimKanali']) 

            urunTipleri.append(urun['UrunH1'])

            teslimTipleri.append(urun['UrunH3']) 

            miktarlar.append(urun['Miktar'])

            #print (urun)

            #tesisKodlari.remove(urun['AS02'])

            

            #urun.remove['TesisKodu': 'AS02'] 

            #del urun['TesisKodu': 'AS02'] 

            tag = str(tesisKodlari[y] + "_" + dagitimKanallari[y] + "_" + urunTipleri[y] + "_" + teslimTipleri[y])

 

            y = y + 1

            

            tags.append(tag)

            

            #print(tag)

        #print(tags)

          

        username = "OCPIDATA"

        password = "{PASS}"

 

        url = "https://localhost/piwebapi/dataservers/F1DS6UGiJEX5ckmZE5dg0JJyvgU1JWT0NQSURBVEE/points?maxCount=150000"

 

        response = requests.get(url, auth=HTTPBasicAuth(username, password), verify=False)

 

        items = json.loads(response.text)["Items"]

 

        webIds = []

       

        #print(tags)

 

        x = 0

 

        print(miktarlar)

 

        for i in range(len(tags)):

 

            for item in items:

 

                #print(x)

 

                #print(item["WebId"])

                

                if(item["Name"] == str(tags[i])):

 

                    print(tags[i])

 

                    webIds.append(item["WebId"])

                    

                    url = "https://localhost/piwebapi/streams/{}/value".format(webIds[x])

 

                    

                    #print(webIds)

 

                    #print(url)

 

                    headers ={"X-Requested-With": "XMLHttpRequest","Content-Type": "application/json"}

 

                    print(miktarlar[i])

 

                    data = {"Timestamp": str(datetime.datetime.now()),"Good": True,"Value": float(miktarlar[i])}

 

                    response = requests.post(url, headers=headers, json=data, auth=HTTPBasicAuth(username, password), verify=False)

 

                    print(response)

 

                    x = x + 1

 

        time.sleep(30)

 

    except Exception as e:

        

        print(e)

        #logFile = open("log.txt", 'a')

        #logFile.write(str(datetime.datetime.now()) + " | " + str(e) + "\n")

        #logFile.close()