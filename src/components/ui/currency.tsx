"use client";

import { useState, useEffect } from "react";

const formatter = new Intl.NumberFormat("en-In", {
  style: "currency",
  currency: "INR",
});

const Currency = ({ value }: { value: string | number }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <div className="font-semibold">{formatter.format(Number(value))}</div>;
};

export default Currency;
