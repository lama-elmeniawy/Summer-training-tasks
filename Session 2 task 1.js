function processOrders(orders) {
    let totalRevenue = 0;
    let successfulOrders = 0;
    let processedCount = 0;
    let consecutiveSkips = 0;
    let totalStockFailures = 0;
    let stopMessage = "";

    for (let i = 0; i < orders.length; i++) {
        let order = orders[i];

        if (order.status === "cancelled" || order.status === "invalid" || !order.stockAvailable) {
            consecutiveSkips++;
            
            if (!order.stockAvailable) {
                totalStockFailures++;
            }

            if (consecutiveSkips === 3 || totalStockFailures === 3) {
                stopMessage = "System stopped due to critical failure";
                break;
            }
        } else {
            consecutiveSkips = 0;
            totalRevenue += order.amount;
            successfulOrders++;
        }

        processedCount++;
    }

    let result = {
        totalRevenue: totalRevenue,
        successfulOrders: successfulOrders,
        processedOrdersCount: processedCount
    };

    if (stopMessage !== "") {
        result.stopMessage = stopMessage;
    }

    return result;
}