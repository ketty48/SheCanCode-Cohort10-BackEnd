
const menu={
_meal:'',
_price:0,
set meal(mealToCheck){
    if(typeof mealToCheck===String){
        return this._meal=mealToCheck;
    }
},
set price(priceToCheck){
    if(typeof priceToCheck===number){
        return this._price=priceToCheck;
    }
},
get todaySpecial(){
    if(this._meal && this._price){
        return `Today’s Special is ${this._meal} for ${this._price} frw!`;
    }else{
        return 'Meal or price was not set correctly!'
    }
}
};


menu._meal='chicken';
menu._price=2000;
//console.log(menu);
console.log(menu.todaySpecial);