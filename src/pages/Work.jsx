"use client";

import { useState } from "react";
import { FlipReveal, FlipRevealItem } from "@/components/ui/flip-reveal";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export const Work = () => {
    const [key, setKey] = useState("all");

    return (
        <div className="flex min-h-[60vh] flex-col items-center gap-8 py-16">
            <h1 className="text-6xl font-serif mb-12 text-vintage-black">All Projects</h1>
            
            <ToggleGroup
                type="single"
                className="bg-vintage-cream rounded-md border border-vintage-gray/20 p-2 shadow-sm"
                value={key}
                onValueChange={(e) => {
                    // Prevent deselecting making the value empty
                    if (e) setKey(e);
                }}>
                <ToggleGroupItem value="all" className="sm:px-6 font-semibold uppercase tracking-wider text-xs">
                    All
                </ToggleGroupItem>
                <ToggleGroupItem value="shirt" className="sm:px-6 font-semibold uppercase tracking-wider text-xs">
                    Apparel
                </ToggleGroupItem>
                <ToggleGroupItem value="goggles" className="sm:px-6 font-semibold uppercase tracking-wider text-xs">
                    Accessories
                </ToggleGroupItem>
                <ToggleGroupItem value="shoes" className="sm:px-6 font-semibold uppercase tracking-wider text-xs">
                    Footwear
                </ToggleGroupItem>
            </ToggleGroup>

            <FlipReveal className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-12" keys={[key]} showClass="flex" hideClass="hidden">
                <FlipRevealItem flipKey="shirt">
                    <div className="overflow-hidden rounded-xl shadow-lg group">
                        <img
                            src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600"
                            alt="Shirt"
                            className="w-48 h-48 md:w-64 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </FlipRevealItem>
                <FlipRevealItem flipKey="goggles">
                    <div className="overflow-hidden rounded-xl shadow-lg group">
                        <img
                            src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=600"
                            alt="Goggles"
                            className="w-48 h-48 md:w-64 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </FlipRevealItem>
                <FlipRevealItem flipKey="shoes">
                    <div className="overflow-hidden rounded-xl shadow-lg group">
                        <img
                            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600"
                            alt="Shoes"
                            className="w-48 h-48 md:w-64 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </FlipRevealItem>
                <FlipRevealItem flipKey="goggles">
                    <div className="overflow-hidden rounded-xl shadow-lg group">
                        <img
                            src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=600"
                            alt="Sunglasses"
                            className="w-48 h-48 md:w-64 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </FlipRevealItem>
                <FlipRevealItem flipKey="shirt">
                    <div className="overflow-hidden rounded-xl shadow-lg group">
                        <img
                            src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=600"
                            alt="Shirt"
                            className="w-48 h-48 md:w-64 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </FlipRevealItem>
                <FlipRevealItem flipKey="shoes">
                    <div className="overflow-hidden rounded-xl shadow-lg group">
                        <img
                            src="https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=600"
                            alt="Shoes"
                            className="w-48 h-48 md:w-64 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </FlipRevealItem>
                <FlipRevealItem flipKey="shirt">
                    <div className="overflow-hidden rounded-xl shadow-lg group">
                        <img
                            src="https://images.unsplash.com/photo-1503341504253-d2d4328ce45a?q=80&w=600"
                            alt="T-Shirt"
                            className="w-48 h-48 md:w-64 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </FlipRevealItem>
                <FlipRevealItem flipKey="shoes">
                    <div className="overflow-hidden rounded-xl shadow-lg group">
                        <img
                            src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=600"
                            alt="Sneakers"
                            className="w-48 h-48 md:w-64 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </FlipRevealItem>
                <FlipRevealItem flipKey="goggles">
                    <div className="overflow-hidden rounded-xl shadow-lg group">
                        <img
                            src="https://images.unsplash.com/photo-1508296695146-257a814050b4?q=80&w=600"
                            alt="Glasses"
                            className="w-48 h-48 md:w-64 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </FlipRevealItem>
            </FlipReveal>
        </div>
    );
};
