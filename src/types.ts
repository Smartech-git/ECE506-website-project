type toastTypes = {
  open: boolean;
  state: undefined | "success" | "error";
  content: undefined | string | number;
};
export type GlobalContextTypes = {
  cart: any;
  setCart: React.Dispatch<React.SetStateAction<any>>;
  toast: toastTypes;
  setToast: React.Dispatch<React.SetStateAction<toastTypes>>;
};
