curl -XPUT 'http://192.168.1.5:4200/test_index/' -d '{
                                                              "settings" : {
                                                              "index" : {
                                                              "number_of_shards" :3,
                                                              "number_of_replicas" : 1
                                                              }
                                                              }
}'
