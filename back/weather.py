# -*- coding: utf-8 -*-
"""
Created on Sat Nov 28 12:25:43 2020

@author: denis
"""
import requests
import time


headers = {
        'x-api-key':'doONDzIp2MLWol9BrXv04bDaS73u98J4',
}

lat = '59.572360'
lon = '150.807606'

dates = [
            ['2010-06-21', '2010-12-31'], 
            ['2011-01-01', '2011-12-31'], 
            ['2012-01-01', '2012-12-31'],
            ['2013-01-01', '2013-12-31'],            
            ['2014-01-01', '2014-12-31'],            
            ['2015-01-01', '2015-12-31'],            
            ['2016-01-01', '2016-12-31'],            
            ['2017-01-01', '2017-12-31'],
            ['2018-01-01', '2018-12-31'],
            ['2019-01-01', '2019-12-31'], 
            ['2020-01-01', '2020-11-27']             
         ]
#dates = [['2010-06-21', '2010-06-30'], ['2012-01-01', '2012-01-10']]

data_all = []



for date in dates:
    r = requests.get('https://api.meteostat.net/v2/point/daily?lat='+lat+'&lon='+lon+'&start='+date[0]+'&end='+date[1], headers=headers)
    data = r.json()
    
    for x in data['data']:
        data_all.append('Магадан;' + str(x['date']) + ';' + str(x['tavg']) + ';' + str(x['tmin']) + ';' + str(x['tmax']) + '\n')
    
    time.sleep(1)
with open ('E:\\test\mng\\temp\\' + 'Магадан.csv', 'w') as f:
    f.writelines(data_all)

