"use client";
import { FC, useState } from "react";
import { ScrollArea } from "src/components/ui/scroll-area";
import { Separator } from "src/components/ui/separator";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { buttonVariants } from "@/components/ui/button";
import { HashRouter, Route, Routes } from "react-router-dom";
import MiddleSection from "./middleSection";
import LeftSection from "./leftSection";
import RightSection from "./rightSection";

const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);

export const IndexPage: FC = () => {
	return (
		<div className="flex flex-col h-screen border-2 border-orange-400 bg-white text-foreground">
			{/* Header */}
			<header className="flex items-center justify-center  bg-orange-300 text-card-foreground py-4 px-6 rounded-lg shadow-lg">
				<h1 className="text-xl font-bold text-center">Vanilla Rišnovce 🍦</h1>
			</header>

			<div className="flex flex-1 gap-4 mt-6 ">
				{/* Ľavá sekcia */}
				<LeftSection></LeftSection>
				<MiddleSection></MiddleSection>
				<RightSection></RightSection>
			</div>

			{/* Dolná veľká sekcia */}
			{/*<div className="mt-4 bg-card p-6 rounded-lg shadow-lg h-40"></div>*/}
		</div>
	);
};
