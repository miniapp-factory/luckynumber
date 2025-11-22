"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

export default function LuckyNumber() {
  const [number, setNumber] = useState<number | null>(null);
  const [explanation, setExplanation] = useState<string>("");

  const generate = () => {
    const n = Math.floor(Math.random() * 100) + 1;
    setNumber(n);
    const isPrime = (num: number) => {
      if (num < 2) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    };
    const isLucky = isPrime(n) || n % 7 === 0;
    setExplanation(
      isLucky
        ? `Number ${n} is lucky because ${isPrime(n) ? "it's a prime number" : "it's divisible by 7"}!`
        : `Number ${n} is not particularly lucky.`
    );
  };

  return (
    <Card className="max-w-sm mx-auto mt-8">
      <CardHeader>
        <CardTitle>Lucky Number Generator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-bold mb-4">{number ?? "—"}</div>
        <p className="mb-4">{explanation}</p>
        <Button onClick={generate}>Generate</Button>
      </CardContent>
    </Card>
  );
}
