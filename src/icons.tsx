export const Cart = ({ className, pathClassName }: { className?: string; pathClassName?: string }) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M21 3.99999H2V5.99999H4.3L7.58 15C7.78631 15.5835 8.16807 16.089 8.67294 16.4471C9.1778 16.8051 9.78106 16.9983 10.4 17H19V15H10.4C10.1945 14.9999 9.99399 14.9365 9.8258 14.8184C9.6576 14.7003 9.52987 14.5333 9.46 14.34L9 13H18.28C18.714 12.9994 19.1361 12.8576 19.4824 12.596C19.8288 12.3344 20.0806 11.9673 20.2 11.55L22 5.26999C22.0406 5.13868 22.0538 5.00039 22.0386 4.86377C22.0234 4.72715 21.9802 4.59512 21.9117 4.47595C21.8432 4.35677 21.7509 4.25299 21.6404 4.1711C21.53 4.08921 21.4039 4.03096 21.27 3.99999C21.1806 3.98543 21.0894 3.98543 21 3.99999ZM18.25 11H8.25L6.43 5.99999H19.67L18.25 11Z'
        fill='white'
        className={pathClassName}
      />
      <path d='M10.5 21C11.3284 21 12 20.3284 12 19.5C12 18.6716 11.3284 18 10.5 18C9.67157 18 9 18.6716 9 19.5C9 20.3284 9.67157 21 10.5 21Z' fill='white' className={pathClassName} />
      <path d='M16.5 21C17.3284 21 18 20.3284 18 19.5C18 18.6716 17.3284 18 16.5 18C15.6716 18 15 18.6716 15 19.5C15 20.3284 15.6716 21 16.5 21Z' fill='white' className={pathClassName} />
    </svg>
  );
};

export const ArrowLeft = ({ className }: { className?: string }) => {
  return (
    <svg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M20 11.8H7.83L13.42 6.21005L12 4.80005L4 12.8L12 20.8L13.41 19.39L7.83 13.8H20V11.8Z' fill='black' className={className} />
    </svg>
  );
};

export const ArrowRigt = ({ className }: { className?: string }) => {
  return (
    <svg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M12 4.80005L10.59 6.21005L16.17 11.8H4V13.8H16.17L10.59 19.39L12 20.8L20 12.8L12 4.80005Z' fill='black' className={className} />
    </svg>
  );
};

export const Facebook = () => {
  return (
    <svg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M22 12.6036C22 7.04699 17.5229 2.54248 12 2.54248C6.47715 2.54248 2 7.04699 2 12.6036C2 17.6253 5.65684 21.7877 10.4375 22.5425V15.5119H7.89844V12.6036H10.4375V10.387C10.4375 7.86544 11.9305 6.4726 14.2146 6.4726C15.3088 6.4726 16.4531 6.66911 16.4531 6.66911V9.14509H15.1922C13.95 9.14509 13.5625 9.9207 13.5625 10.7164V12.6036H16.3359L15.8926 15.5119H13.5625V22.5425C18.3432 21.7877 22 17.6255 22 12.6036Z' fill='white' />
    </svg>
  );
};

export const Instagram = () => {
  return (
    <svg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M16 3.54248H8C5.23858 3.54248 3 5.78106 3 8.54248V16.5425C3 19.3039 5.23858 21.5425 8 21.5425H16C18.7614 21.5425 21 19.3039 21 16.5425V8.54248C21 5.78106 18.7614 3.54248 16 3.54248ZM19.25 16.5425C19.2445 18.3351 17.7926 19.787 16 19.7925H8C6.20735 19.787 4.75549 18.3351 4.75 16.5425V8.54248C4.75549 6.74983 6.20735 5.29797 8 5.29248H16C17.7926 5.29797 19.2445 6.74983 19.25 8.54248V16.5425ZM16.75 8.79248C17.3023 8.79248 17.75 8.34476 17.75 7.79248C17.75 7.2402 17.3023 6.79248 16.75 6.79248C16.1977 6.79248 15.75 7.2402 15.75 7.79248C15.75 8.34476 16.1977 8.79248 16.75 8.79248ZM12 8.04248C9.51472 8.04248 7.5 10.0572 7.5 12.5425C7.5 15.0278 9.51472 17.0425 12 17.0425C14.4853 17.0425 16.5 15.0278 16.5 12.5425C16.5027 11.3482 16.0294 10.2021 15.1849 9.35756C14.3404 8.51307 13.1943 8.03982 12 8.04248ZM9.25 12.5425C9.25 14.0613 10.4812 15.2925 12 15.2925C13.5188 15.2925 14.75 14.0613 14.75 12.5425C14.75 11.0237 13.5188 9.79248 12 9.79248C10.4812 9.79248 9.25 11.0237 9.25 12.5425Z'
        fill='white'
      />
    </svg>
  );
};

export const LinkedIn = () => {
  return (
    <svg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M4.5 3.54248C3.67157 3.54248 3 4.21405 3 5.04248V20.0425C3 20.8709 3.67157 21.5425 4.5 21.5425H19.5C20.3284 21.5425 21 20.8709 21 20.0425V5.04248C21 4.21405 20.3284 3.54248 19.5 3.54248H4.5ZM8.52076 7.5452C8.52639 8.50145 7.81061 9.09067 6.96123 9.08645C6.16107 9.08223 5.46357 8.4452 5.46779 7.54661C5.47201 6.70145 6.13998 6.02223 7.00764 6.04192C7.88795 6.06161 8.52639 6.70708 8.52076 7.5452ZM12.2797 10.3042H9.75971H9.7583V18.8641H12.4217V18.6644C12.4217 18.2845 12.4214 17.9045 12.4211 17.5244C12.4203 16.5106 12.4194 15.4957 12.4246 14.4822C12.426 14.2361 12.4372 13.9802 12.5005 13.7453C12.7381 12.8678 13.5271 12.3011 14.4074 12.4404C14.9727 12.5289 15.3467 12.8566 15.5042 13.3896C15.6013 13.7228 15.6449 14.0814 15.6491 14.4288C15.6605 15.4764 15.6589 16.524 15.6573 17.5717C15.6567 17.9415 15.6561 18.3115 15.6561 18.6813V18.8627H18.328V18.6574C18.328 18.2054 18.3278 17.7535 18.3275 17.3016C18.327 16.1721 18.3264 15.0426 18.3294 13.9127C18.3308 13.4022 18.276 12.8988 18.1508 12.4052C17.9638 11.6711 17.5771 11.0636 16.9485 10.6249C16.5027 10.3127 16.0133 10.1116 15.4663 10.0891C15.404 10.0865 15.3412 10.0831 15.2781 10.0797C14.9984 10.0646 14.7141 10.0492 14.4467 10.1031C13.6817 10.2564 13.0096 10.6066 12.5019 11.2239C12.4429 11.2947 12.3852 11.3666 12.2991 11.4739L12.2797 11.4982V10.3042ZM5.68164 18.8669H8.33242V10.3098H5.68164V18.8669Z'
        fill='white'
      />
    </svg>
  );
};

export const Youtube = () => {
  return (
    <svg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M21.5928 7.50281C21.4789 7.08021 21.2563 6.69482 20.9472 6.38498C20.6381 6.07514 20.2532 5.85167 19.8308 5.73681C18.2648 5.30681 11.9998 5.29981 11.9998 5.29981C11.9998 5.29981 5.73584 5.29281 4.16884 5.70381C3.74677 5.82396 3.36266 6.05059 3.05341 6.36195C2.74415 6.6733 2.52013 7.05893 2.40284 7.48181C1.98984 9.04781 1.98584 12.2958 1.98584 12.2958C1.98584 12.2958 1.98184 15.5598 2.39184 17.1098C2.62184 17.9668 3.29684 18.6438 4.15484 18.8748C5.73684 19.3048 11.9848 19.3118 11.9848 19.3118C11.9848 19.3118 18.2498 19.3188 19.8158 18.9088C20.2383 18.7942 20.6236 18.5712 20.9335 18.262C21.2434 17.9528 21.4672 17.568 21.5828 17.1458C21.9968 15.5808 21.9998 12.3338 21.9998 12.3338C21.9998 12.3338 22.0198 9.06881 21.5928 7.50281ZM9.99584 15.3048L10.0008 9.30481L15.2078 12.3098L9.99584 15.3048Z'
        fill='white'
      />
    </svg>
  );
};

export const ChveronLeft = ({ className }: { className: string }) => {
  return (
    <svg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M13.2929 6.79297L7.58594 12.5L13.2929 18.207L14.7069 16.793L10.4139 12.5L14.7069 8.20697L13.2929 6.79297Z' fill='black' className={className} />
    </svg>
  );
};

export const CheveronRight = () => {
  return (
    <svg width='16' height='17' viewBox='0 0 16 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M6.47099 11.7998L10.2757 7.9951L6.47099 4.19043L5.52832 5.1331L8.39032 7.9951L5.52832 10.8571L6.47099 11.7998Z' fill='black' />
    </svg>
  );
};

export const SelectorIcon = () => {
  return (
    <svg aria-hidden='true' fill='none' focusable='false' height='1em' role='presentation' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' viewBox='0 0 24 24' width='1em'>
      <path d='M0 0h24v24H0z' fill='none' stroke='none' />
      <path d='M8 9l4 -4l4 4' className='fill-black' />
      <path d='M16 15l-4 4l-4 -4' className='fill-black' />
    </svg>
  );
};