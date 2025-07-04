"use client";

import OTPInput from "@/ui/otp/OtpInput";
import clsx from "clsx";
import { useState } from "react";
import styles from "./input.module.css";

export default function Home() {
  const [value, setValue] = useState("");

  return (
    <div className="bg-gray-800 h-[100vw] flex items-center justify-center">
      <OTPInput
        value={value}
        onChange={(value) => {
          if (/^\d+$/.test(value) || value === "") {
            setValue(value);
            if (value.length === 4) {
              alert(value);
            }
          }
        }}
        containerStyle={{ gap: "10px" }}
        inputStyle={{ width: "50px", height: "50px" }}
        renderInput={(qwe) => (
          <input
            {...qwe}
            type="number"
            inputMode="numeric"
            className={clsx(styles.input, qwe.value && styles["input-filled"])}
          />
        )}
        shouldAutoFocus
      />
    </div>
  );
}
