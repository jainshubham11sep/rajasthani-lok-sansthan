"use client";

import { useState } from "react";
import { site } from "@/lib/site";

const amounts = [500, 1000, 2500, 5000];
const frequencies = ["One-time", "Monthly", "Yearly"] as const;

export default function DonateWidget() {
  const [frequency, setFrequency] =
    useState<(typeof frequencies)[number]>("One-time");
  const [amount, setAmount] = useState(1000);
  const [custom, setCustom] = useState("");

  const finalAmount = custom ? Number(custom) : amount;

  const subject = encodeURIComponent(
    `Donation enquiry — ₹${finalAmount || ""} (${frequency})`,
  );
  const body = encodeURIComponent(
    `Hello,\n\nI would like to donate ₹${finalAmount || "___"} (${frequency}) to Rajasthani Lok Sansthan / Ujaas Special Academy. Please share the next steps.\n\nName:\nPhone:\n`,
  );

  return (
    <div className="rounded-3xl border border-ink/10 bg-paper p-6 shadow-lg shadow-ink/5 sm:p-8">
      <div className="flex rounded-full bg-cream-dark p-1">
        {frequencies.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFrequency(f)}
            className={`flex-1 rounded-full py-2 text-sm font-semibold transition ${
              frequency === f
                ? "bg-maroon text-paper shadow-sm"
                : "text-ink-soft hover:text-ink"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">
        {amounts.map((a) => (
          <button
            key={a}
            type="button"
            onClick={() => {
              setAmount(a);
              setCustom("");
            }}
            className={`rounded-xl border px-4 py-3 text-center font-display text-lg font-semibold transition ${
              !custom && amount === a
                ? "border-maroon bg-maroon/10 text-maroon"
                : "border-ink/10 text-ink hover:border-maroon/40"
            }`}
          >
            &#8377;{a.toLocaleString("en-IN")}
          </button>
        ))}
      </div>

      <div className="mt-3">
        <label className="text-xs font-medium text-ink-soft" htmlFor="custom-amount">
          Or enter a custom amount
        </label>
        <div className="mt-1.5 flex items-center rounded-xl border border-ink/10 px-4 py-2.5 focus-within:border-maroon/50">
          <span className="text-ink-soft">&#8377;</span>
          <input
            id="custom-amount"
            type="number"
            min={1}
            inputMode="numeric"
            placeholder="Enter amount"
            value={custom}
            onChange={(e) => setCustom(e.target.value)}
            className="w-full bg-transparent px-2 py-0.5 text-ink outline-none"
          />
        </div>
      </div>

      <a
        href={`mailto:${site.email}?subject=${subject}&body=${body}`}
        className="mt-6 flex w-full items-center justify-center rounded-full bg-maroon px-6 py-3.5 text-sm font-semibold text-paper transition hover:bg-maroon-dark"
      >
        Donate &#8377;{finalAmount ? finalAmount.toLocaleString("en-IN") : "___"} &middot; {frequency}
      </a>
      <p className="mt-3 text-center text-xs text-ink-soft">
        This opens an email to our team to arrange your transfer securely.
        Prefer bank transfer directly? See details below.
      </p>
    </div>
  );
}
