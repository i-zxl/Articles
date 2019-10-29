#! /bin/bash

# linux 环境执行，替换host:port
num=50
 
while [ $num -gt 30 ];
do
num=`expr $num - 1`;

DELETE_DATE=$(date -d "$num days ago" +%Y.%m.%d)

echo "delete index logstash-$DELETE_DATE"
# 或其他索引名称
curl -XDELETE "http://host:port/logstash-$DELETE_DATE"

done
