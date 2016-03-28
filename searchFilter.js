curl -XGET 'http://192.168.1.5:4200/test_index/product/_search' -d '{
    "query" : {
        "filtered" : {
            "query" : {"term": {"category" : 1}},
            "filter" : {"range" : {"tag_id" : { "from" : 1 , "to": 100 }}}
        }
    }
}
'
