curl -XPUT 'http://192.168.1.5:4200/test_index/_mapping/product' -d '{
"product" : { 
                "properties" : { 
                    "category" : { 
                        "type" : "integer" 
                        }, 
                    "id" : { 
                        "type" : "integer" 
                    }, 
                    "name" : { 
                        "type" : "string", 
                        "index" : "not_analyzed" 
                    }, 
                    "property_stock" : { 
                        "type" : "integer" 
                    }, 
                    "skus" : { 
                        "type" : "string", 
                        "index" : "not_analyzed" 
                    }, 
                    "tags" : { 
                        "properties" : { 
                            "group_id" : { 
                                "type" : "integer" 
                            }, 
                            "tag_id" : { 
                                "type" : "integer" 
                            } 
                        } 
                    }, 
                    "visible" : { 
                        "type" : "boolean" 
                    } 
                } 
            } 
        }'
