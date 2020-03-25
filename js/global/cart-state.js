let cart = {
    state: [],
    addToState: function (id) {
        //finding same product from store

        let item = products.find(function (product) {
            return product.Id == id;
        });
        const InCart = this.state.find(function (thing) {
            return item.Id === thing.Id;
        });

        item.count = 1;
        if (InCart) {

        } else {
            this.state.push(item);

        }
        $('.cart-number').html(this.state.length);
        localStorage.setItem('cart-state', JSON.stringify(this.state));

        // localStorage.setItem(key(string),value(string))
    },



    getStateFromStorage: function () {
        const jsonDate = localStorage.getItem('cart-state');
        if (jsonDate) {
            this.state = JSON.parse(jsonDate);
        }
            $('.cart-number').html(this.state.length);
    },


    increaseTheCount: function (id) {
        //finding item in state
        let product = this.state.find(function (item) {
            return item.Id == id;
        });
        //increase the product count
        product.count += 1;

        //render cart view 
        renderCart(this.state);

        //save changes in local storage 
        localStorage.setItem('cart-state', JSON.stringify(this.state));
    },


    decreaseTheCount: function (id) {
        //finding item in state
        let product = this.state.find(function (item) {
            return item.Id == id;
        });
        //decrease the product count if its higher than 1
        if (product.count > 1) {
            product.count -= 1;

            //render cart view 
            renderCart(this.state);
            //save changes in local storage 
            localStorage.setItem('cart-state', JSON.stringify(this.state));

        } else {

        }

    },




    removeAnItem: function (id) {
        this.state = this.state.filter(function(item) {
            if (item.Id == id) {
                return false;
            } else {
                return true;
            }
        });
        //rerender cart view
        renderCart(this.state);
        //save changes in local storage 
        localStorage.setItem('cart-state', JSON.stringify(this.state));
    },


    removeAll: function () {
        //clear the state
        this.state = [];

        //rerender cart view
        renderCart(this.state);

        //save changes in local storage 
        localStorage.setItem('cart-state', JSON.stringify(this.state));

    },


};
cart.getStateFromStorage();
