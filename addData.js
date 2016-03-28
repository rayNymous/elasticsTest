curl -XPOST 'http://192.168.1.5:4200/test_index/product/1' -d '{
   "category" : 1,
   "id" : 2,
   "name" : "mamkuYeba2l",
   "property_stock" : 1,
   "skus": "whatafuck",
   "tags" : 
   {
     "group_id": [1, 2, 3],
     "tag_id" : [3, 4, 5]
   },
   "visible" : true
}'

curl -XPOST 'http://192.168.1.5:4200/test_index/product/2' -d '{
   "category" : 1,
   "id" : 2,
   "name" : "nahuytakjit",
   "property_stock" : 1,
   "skus": "whatafuck",
   "tags" : 
   {
     "group_id": [100500, 3],
     "tag_id" : [100500, 1000]
   },
   "visible" : true
}'


curl -XPOST 'http://192.168.1.5:4200/test_index/product/3' -d '{
   "category" : 1,
   "id" : 3,
   "name" : "vasheKotyata",
   "property_stock" : 2,
   "skus": "LoveLoveChu<3",
   "tags" : 
   {
     "group_id": [100, 3],
     "tag_id" : [100, 99 ]
   },
   "visible" : true
}'

curl -XPOST 'http://192.168.1.5:4200/test_index/product/4' -d '{
   "category" : 2,
   "id" : 4,
   "name" : "vash",
   "property_stock" : 2,
   "skus": "Love<3",
   "tags" : 
   {
     "group_id": [1, 3],
     "tag_id" : [100, 99, 2 ]
   },
   "visible" : true
}'


curl -XPOST 'http://192.168.1.5:4200/test_index/product/5' -d '{
   "category" : 3,
   "id" : 5,
   "name" : "vash",
   "property_stock" : 2,
   "skus": "Cate3",
   "tags" : 
   {
     "group_id": [100, 3, 1],
     "tag_id" : [100, 99, 2 ]
   },
   "visible" : true
}'
