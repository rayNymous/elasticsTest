curl -XGET 'http://192.168.1.5:4200/test_index/product/_search' -d '{
    "query" : 
    {
        "bool" :
         {
             "should" : 
             [
                 {"match" : {"category" : 1}},
                 {"match" : {"category" : 2}},
                 {"match" : {"category" : 100500}}
             ],
             "must" :
             [
                 {"match": {"group_id" : 1}},
                 {"match": {"group_id" : 3}},
                 {"match": {tag_id: 2}}
             ]
         }
    }
}
'
