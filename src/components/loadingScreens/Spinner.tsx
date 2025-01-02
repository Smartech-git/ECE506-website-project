import React from "react";
import Image from "next/image";

export default function Spinner({
  className,
  pathClassName,
  strokeWidth = "5",
}: {
  className?: string;
  pathClassName?: string;
  strokeWidth?: string;
}) {
  return (
    <svg
      width="41"
      height="41"
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} animate-spin`}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M38.9503 18.3975H38.9466C37.8164 18.3975 36.9006 19.3206 36.9043 20.4509C36.9115 24.8341 35.2217 28.9555 32.1291 32.0666C29.0437 35.1704 24.9299 36.8895 20.5509 36.9004H20.5036C16.1391 36.9004 12.0325 35.2067 8.9363 32.1284C5.83279 29.0427 4.11386 24.9286 4.10296 20.5454C4.08843 16.1659 5.78191 12.0409 8.87452 8.93343C11.9599 5.82962 16.0737 4.11054 20.4527 4.096C21.7392 4.11781 23.0911 4.24501 24.3594 4.55394C25.4569 4.81925 26.5689 4.13962 26.8342 3.04202C27.0995 1.94079 26.4235 0.835919 25.3224 0.566971C23.7343 0.185356 22.0699 0.0218066 20.4418 0C14.9653 0.0145377 9.82302 2.15885 5.96725 6.04406C2.10058 9.92563 -0.0144619 15.0829 7.44333e-05 20.56C0.0182449 26.0371 2.16599 31.1761 6.0472 35.0359C9.91751 38.8848 15.0488 41 20.5036 41H20.5581C26.0347 40.9855 31.1769 38.8375 35.04 34.9559C38.8994 31.0707 41.0181 25.9135 40.9999 20.44C40.9963 19.3097 40.0841 18.3975 38.9503 18.3975Z"
        fill="#009933"
        className={`fill-white ${pathClassName}`}
      />
    </svg>
  );
}

export const Spinner_light = ({ className }: { className?: string }) => {
  return (
    <div className={`h-[50px] w-fit ${className}`}>
      <Image
        alt="loading"
        width={500}
        height={500}
        className="h-full w-fit"
        src="/gifs/Jikoo logo White icon loop.gif"
      />
    </div>
  );
};

export const Spinner_green = ({ className }: { className?: string }) => {
  return (
    <div className={`h-[50px] w-fit ${className}`}>
      <Image
        alt="loading"
        width={500}
        height={500}
        className="h-full w-fit"
        src="/gifs/Jikoo logo Green icon loop.gif"
      />
    </div>
  );
};
