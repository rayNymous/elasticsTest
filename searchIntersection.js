curl -XGET 'http://192.168.1.5:4200/test_index/product/_search' -d '{
    "query" : {
        "bool" : {
            "should" :[
                {"match": {"group_id" : 1}},
                {"match": {"group_id" : 100500}}
            ]
        }
    }
}
'
