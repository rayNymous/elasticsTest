curl -XGET 'http://192.168.1.5:4200/test_index/product/_search' -d '{
    "query" : {
        "term" : { "category" : 1 }
    }
}
'
