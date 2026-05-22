import React from "react";

export const handleExtLink = (e: React.MouseEvent | React.FocusEvent | React.FormEvent | React.TouchEvent) => {
  e.preventDefault();
  const el = e.currentTarget as HTMLAnchorElement;
  const url = el.href || el.dataset['href'];
  const target = el.target || el.dataset['target'];
  const newWindow = window.open(url, target || "_blank");
  newWindow?.focus();
}