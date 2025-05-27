"use client";

import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

import { motion } from "framer-motion";

export default function LotteryGift() {
  const [started, setStarted] = useState(false);
  const [won, setWon] = useState(false);
  const [animating, setAnimating] = useState(false);

  const handleClick = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setStarted(true);
      setWon(true);
      setAnimating(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100 p-4">
      <Card className="max-w-md w-full shadow-2xl rounded-2xl">
        <CardContent className="p-6 text-center">
          {!started ? (
            <>
              <h1 className="text-2xl font-bold mb-4 text-purple-800">
                Привет! Сегодня ты можешь испытать свою удачу 🎟️
              </h1>
              <p className="text-gray-600 mb-6">
                Нажми на кнопку ниже и узнай, что тебя ждёт...
              </p>
              <Button onClick={handleClick} className="text-lg px-6 py-2">
                Испытать удачу
              </Button>
            </>
          ) : won ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-green-600">
                Поздравляем! 🎉
              </h2>
              <p className="text-gray-700">Ты выиграла два билета на концерт</p>
              <p className="font-semibold text-purple-700">
                Оркестровое шоу песен Twenty One Pilots 🎶
              </p>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/2/2a/Twenty_One_Pilots_logo.png"
                alt="Twenty One Pilots"
                className="mx-auto w-40"
              />
            </motion.div>
          ) : null}
        </CardContent>
      </Card>
    </div>
  );
}
