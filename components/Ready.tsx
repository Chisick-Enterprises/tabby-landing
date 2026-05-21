"use client";
import { useLayoutEffect } from "react";

export function Ready() {
  useLayoutEffect(() => {
    document.body.classList.add("ready");
  }, []);
  return null;
}
