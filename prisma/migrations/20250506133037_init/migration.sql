-- CreateTable
CREATE TABLE "PizzaStore" (
    "storeid" SERIAL NOT NULL,
    "storeuuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "phone" INTEGER NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "PizzaStore_pkey" PRIMARY KEY ("storeid")
);

-- CreateTable
CREATE TABLE "Pizza" (
    "pizzaid" SERIAL NOT NULL,
    "pizzauuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "storeId" INTEGER NOT NULL,

    CONSTRAINT "Pizza_pkey" PRIMARY KEY ("pizzaid")
);

-- CreateTable
CREATE TABLE "Desert" (
    "desertid" SERIAL NOT NULL,
    "desertuuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Desert_pkey" PRIMARY KEY ("desertid")
);

-- CreateTable
CREATE TABLE "DesertIngredients" (
    "desertingredientid" SERIAL NOT NULL,
    "desertingredientuuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "DesertIngredients_pkey" PRIMARY KEY ("desertingredientid")
);

-- CreateTable
CREATE TABLE "PizzaIngredient" (
    "ingredientid" SERIAL NOT NULL,
    "ingredientuuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "PizzaIngredient_pkey" PRIMARY KEY ("ingredientid")
);

-- CreateTable
CREATE TABLE "Refreshment" (
    "refreshmentid" SERIAL NOT NULL,
    "refreshmentuuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "size" TEXT NOT NULL,

    CONSTRAINT "Refreshment_pkey" PRIMARY KEY ("refreshmentid")
);

-- CreateTable
CREATE TABLE "PizzaRating" (
    "ratingid" SERIAL NOT NULL,
    "ratinguuid" TEXT NOT NULL,
    "score" INTEGER NOT NULL DEFAULT 0,
    "comment" TEXT,
    "pizzaId" INTEGER NOT NULL,

    CONSTRAINT "PizzaRating_pkey" PRIMARY KEY ("ratingid")
);

-- CreateTable
CREATE TABLE "Order" (
    "orderid" SERIAL NOT NULL,
    "orderuuid" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "statusId" INTEGER NOT NULL,
    "orderinstructions" TEXT NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("orderid")
);

-- CreateTable
CREATE TABLE "OrderStatus" (
    "statusid" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "OrderStatus_pkey" PRIMARY KEY ("statusid")
);

-- CreateTable
CREATE TABLE "_PizzaToPizzaIngredient" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_PizzaToPizzaIngredient_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_DesertToDesertIngredients" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_DesertToDesertIngredients_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_OrderDeserts" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_OrderDeserts_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_OrderPizzas" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_OrderPizzas_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_OrderRefreshments" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_OrderRefreshments_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "PizzaStore_storeuuid_key" ON "PizzaStore"("storeuuid");

-- CreateIndex
CREATE UNIQUE INDEX "Pizza_pizzauuid_key" ON "Pizza"("pizzauuid");

-- CreateIndex
CREATE UNIQUE INDEX "Desert_desertuuid_key" ON "Desert"("desertuuid");

-- CreateIndex
CREATE UNIQUE INDEX "DesertIngredients_desertingredientuuid_key" ON "DesertIngredients"("desertingredientuuid");

-- CreateIndex
CREATE UNIQUE INDEX "PizzaIngredient_ingredientuuid_key" ON "PizzaIngredient"("ingredientuuid");

-- CreateIndex
CREATE UNIQUE INDEX "Refreshment_refreshmentuuid_key" ON "Refreshment"("refreshmentuuid");

-- CreateIndex
CREATE UNIQUE INDEX "PizzaRating_ratinguuid_key" ON "PizzaRating"("ratinguuid");

-- CreateIndex
CREATE UNIQUE INDEX "Order_orderuuid_key" ON "Order"("orderuuid");

-- CreateIndex
CREATE UNIQUE INDEX "OrderStatus_name_key" ON "OrderStatus"("name");

-- CreateIndex
CREATE INDEX "_PizzaToPizzaIngredient_B_index" ON "_PizzaToPizzaIngredient"("B");

-- CreateIndex
CREATE INDEX "_DesertToDesertIngredients_B_index" ON "_DesertToDesertIngredients"("B");

-- CreateIndex
CREATE INDEX "_OrderDeserts_B_index" ON "_OrderDeserts"("B");

-- CreateIndex
CREATE INDEX "_OrderPizzas_B_index" ON "_OrderPizzas"("B");

-- CreateIndex
CREATE INDEX "_OrderRefreshments_B_index" ON "_OrderRefreshments"("B");

-- AddForeignKey
ALTER TABLE "Pizza" ADD CONSTRAINT "Pizza_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "PizzaStore"("storeid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PizzaRating" ADD CONSTRAINT "PizzaRating_pizzaId_fkey" FOREIGN KEY ("pizzaId") REFERENCES "Pizza"("pizzaid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "OrderStatus"("statusid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PizzaToPizzaIngredient" ADD CONSTRAINT "_PizzaToPizzaIngredient_A_fkey" FOREIGN KEY ("A") REFERENCES "Pizza"("pizzaid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PizzaToPizzaIngredient" ADD CONSTRAINT "_PizzaToPizzaIngredient_B_fkey" FOREIGN KEY ("B") REFERENCES "PizzaIngredient"("ingredientid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DesertToDesertIngredients" ADD CONSTRAINT "_DesertToDesertIngredients_A_fkey" FOREIGN KEY ("A") REFERENCES "Desert"("desertid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DesertToDesertIngredients" ADD CONSTRAINT "_DesertToDesertIngredients_B_fkey" FOREIGN KEY ("B") REFERENCES "DesertIngredients"("desertingredientid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrderDeserts" ADD CONSTRAINT "_OrderDeserts_A_fkey" FOREIGN KEY ("A") REFERENCES "Desert"("desertid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrderDeserts" ADD CONSTRAINT "_OrderDeserts_B_fkey" FOREIGN KEY ("B") REFERENCES "Order"("orderid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrderPizzas" ADD CONSTRAINT "_OrderPizzas_A_fkey" FOREIGN KEY ("A") REFERENCES "Order"("orderid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrderPizzas" ADD CONSTRAINT "_OrderPizzas_B_fkey" FOREIGN KEY ("B") REFERENCES "Pizza"("pizzaid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrderRefreshments" ADD CONSTRAINT "_OrderRefreshments_A_fkey" FOREIGN KEY ("A") REFERENCES "Order"("orderid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrderRefreshments" ADD CONSTRAINT "_OrderRefreshments_B_fkey" FOREIGN KEY ("B") REFERENCES "Refreshment"("refreshmentid") ON DELETE CASCADE ON UPDATE CASCADE;
