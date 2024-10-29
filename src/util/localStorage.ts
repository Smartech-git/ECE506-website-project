const cart = 'fd'
export const getCart_data = () => {
    if (global?.window !== undefined) {
      const data: any = localStorage.getItem(cart);
      return JSON?.parse(data);
    }
  };
  
  export const setCart_data = (param: any) => {
    localStorage.setItem(cart, JSON.stringify(param));
  };
  
  export const clearCart_data = () => {
    localStorage.removeItem(cart);
  };