const menu = {
    _meal: '',
    _price: 0,
    
    set meal (mealToCheck){
      if(typeof mealToCheck === 'string'){
       return this._meal = mealToCheck;
      }
    },

    set price(priceToCheck){
      if(typeof priceToCheck === 'number'){
        return menu._price = priceToCheck;
      }
    },

    get todaysSpecial(){
      if(this._meal && this._price){
        return "Today's special is spaghetti for 5€";
      }else {
        return 'Meal or price was not set correctly';
      }
    }
    
};

menu._meal = 'hummus';
menu._price = 12;
console.log(menu);

menu.meal = 'non sei';
menu.price = 56;
console.log(menu);

console.log(menu.todaysSpecial);