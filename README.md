# SaucySoireeAPI
An E-Commerce API For Pizza Shop

# API Endpoints 

# Pizzas
*** 
1008/api/pizzas -- "Get" all Pizzas including details
*** 
1008/api/pizzas -- "POST" Add New Pizza including details ---(req: name, description, price, ingredients, storeId)
*** 
1008/api/pizzas/:pizzaid -- "PUT" Update Pizza details ---(param: pizzaid, req: name, description, price, ingredients, storeId)
*** 
1008/api/pizzas/:pizzaid -- "Delete" Remove Pizza details ---(param: pizzaid)


# Deserts
*** 
1008/api/deserts -- "Get" all Deserts including details
*** 
1008/api/deserts -- "POST" Add New Desert including details ---(req: name, price, ingredients)
*** 
1008/api/deserts/:desertid -- "PUT" Update Desert details ---(param: desertid, req: name, price, ingredients)
*** 
1008/api/deserts/:desertid -- "Delete" Remove Desert details ---(param: desertid)

# Refreshments
*** 
1008/api/refreshments -- "Get" all Refreshments including details
*** 
1008/api/refreshments -- "POST" Add New Refreshment including details ---(req: name, price, size)
*** 
1008/api/refreshments/:refreshmentid -- "PUT" Update Refreshment details ---(param: refreshmentid, req: name, price, size)
*** 
1008/api/refreshments/:refreshmentid -- "Delete" Remove Refreshment details ---(param: refreshmentid)

# Orders
*** 
1008/api/orders -- "Get" all Orders including details
*** 
1008/api/orders -- "POST" Add New Order including details ---(req: pizzas, deserts, refreshments, statusId, orderinstructions)
*** 
1008/api/orders/:orderid -- "PUT" Update Order details ---(param: orderid, req: pizzas, deserts, refreshments, statusId, orderinstructions)
*** 
1008/api/orders/:orderid -- "Delete" Remove Order details ---(param: orderid)

# Stores
*** 
1008/api/stores -- "Get" all stores including details
*** 
1008/api/stores -- "POST" Add New Stores including details ---(req: name, location, phone, email)
*** 
1008/api/stores/:storeid -- "PUT" Update Stores details ---(param: storeid, req: name, location, phone, email)
*** 
1008/api/stores/:storeid -- "Delete" Remove Stores details ---(param: storeid)