import React from "react";
import { Section, Article } from "../../components/stsuct/sections/sections";
import {
  TextInput,
  TextAreaInput,
  EmailInput,
  PasswordInput,
  PriceInput,
  FloatInput,
  IntegerInput,
} from "../../components/base/inputs/inputsGPT";
import { NormButton } from "../../components/base/buttons/buttons";
import { useState, useEffect } from "react";  
import s from "./si.module.css";

export const DeBag = () => {
   const [lastAction, setLastAction] = useState("Нажмите на любую кнопку...");
    const [isDebug, setIsDebug] = useState(false);
   const handleAction = (msg) =>
     setLastAction(`Событие: ${msg} (${new Date().toLocaleTimeString()})`);
     useEffect(() => {
       return () => document.body.classList.remove("show-debug");
     }, []);
   
    const toggleDebug = () => {
      setIsDebug(!isDebug);
      document.body.classList.toggle("show-debug");
      handleAction(isDebug ? "Debug выключен" : "Debug включен");
    };
  return (
    <>
      

      
      {/* --- РЕЖИМ ОТЛАДКИ --- */}
      <Section title="Инструменты разработчика" id="debug">
        <Article title="Debug Mode" className={s.demoBox}>
          <p>
            Нажмите кнопку ниже, чтобы увидеть границы всех кнопок и их
            технические метки.
          </p>
          <NormButton
            onClick={toggleDebug}
            status={isDebug ? "accent" : "normal"}
          >
            {isDebug ? "ДЕБАГ ВКЛЮЧЕН" : "ВКЛЮЧИТЬ ДЕБАГ"}
          </NormButton>
        </Article>
      </Section>
    </>
  );
};