
class Cart {
    constructor(oldCart){
        this.items = oldCart.items || {};
        this.totalQty = oldCart.totalQty || 0;
        this.totalPrice = oldCart.totalPrice || 0;
    }
    add(item, id ,sl) {
        var storedItem = this.items[id];
        if(!storedItem) {
            storedItem = this.items[id] = {item: item, qty: 0, price: 0};
        }
        storedItem.qty += Number(sl);
        storedItem.price = storedItem.item.price * storedItem.qty ;
        this.totalQty += Number(sl);
        this.totalPrice += storedItem.item.price*Number(sl);
    };
    update(id ,sl) {
        var storedItem = this.items[id];
    
        var oldQty = storedItem.qty;
        storedItem.qty = sl;
        storedItem.price = storedItem.item.price * storedItem.qty;
        this.totalQty += sl - oldQty;
        this.totalPrice += storedItem.price - storedItem.item.price * oldQty;
    }

    generateArray() {
        var arr = [];
        for (var id in this.items) {
            arr.push(this.items[id]);
        }
        return arr;
    };
};

module.exports = Cart;

