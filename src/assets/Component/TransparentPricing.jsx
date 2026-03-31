import React from "react";
import { Check } from "lucide-react";

const Pricing = () => {
    return (
        <div className="py-16">
            
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold  inline-block px-6">
                    Simple, Transparent Pricing
                </h1>
                <p className="text-gray-500 pt-2">
                    Choose the plan that fits your needs. Upgrade or downgrade anytime.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">

                <div className="bg-gray-100 rounded-2xl p-6 shadow">
                    <h2 className="text-xl font-semibold">Starter</h2>
                    <p className="text-gray-500 text-sm mb-4">
                        Perfect for getting started
                    </p>

                    <h1 className="text-3xl font-bold mb-4">$0<span className="text-base font-normal">/Month</span></h1>

                    <ul className="space-y-2 text-gray-600 mb-6">
                        <li className="flex items-center gap-2">
                            <Check size={18} className="text-green-500" />
                            Access to free tools
                        </li>
                        <li className="flex items-center gap-2">
                            <Check size={18} className="text-green-500" />
                            Basic templates
                        </li>
                        <li className="flex items-center gap-2">
                            <Check size={18} className="text-green-500" />
                            Community support
                        </li>
                        <li className="flex items-center gap-2">
                            <Check size={18} className="text-green-500" />
                            1 project per month
                        </li>
                    </ul>

                    <button className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-2 rounded-full">
                        Get Started Free
                    </button>
                </div>

                <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-2xl p-6 shadow-lg relative">

                    <span className="font-semibold absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">
                        Most Popular
                    </span>

                    <h2 className="text-xl font-semibold">Pro</h2>
                    <p className="text-sm mb-4 opacity-80">
                        Best for professionals
                    </p>

                    <h1 className="text-3xl font-bold mb-4">$29<span className="text-base font-normal">/Month</span></h1>

                    <ul className="space-y-2 mb-6">
                        <li className="flex items-center gap-2">
                            <Check size={18} className="text-gray-100" /> Access to all premium tools</li>
                        <li className="flex items-center gap-2">
                            <Check size={18} className="text-gray-100" /> Unlimited templates</li>
                        <li className="flex items-center gap-2">
                            <Check size={18} className="text-gray-100" /> Priority support</li>
                        <li className="flex items-center gap-2">
                            <Check size={18} className="text-gray-100" /> Unlimited projects</li>
                        <li className="flex items-center gap-2">
                            <Check size={18} className="text-gray-100" /> Cloud sync</li>
                        <li className="flex items-center gap-2">
                            <Check size={18} className="text-gray-100" /> Advanced analytics</li>
                    </ul>

                    <button className="w-full bg-white text-purple-600 py-2 rounded-full font-semibold">
                        Start Pro Trial
                    </button>
                </div>

                <div className="bg-gray-100 rounded-2xl p-6 shadow">
                    <h2 className="text-xl font-semibold">Enterprise</h2>
                    <p className="text-gray-500 text-sm mb-4">
                        For teams and businesses
                    </p>

                    <h1 className="text-3xl font-bold mb-4">$99<span className="text-base font-normal">/Month</span></h1>

                    <ul className="space-y-2 text-gray-600 mb-6">

                        <li className="flex items-center gap-2">
                            <Check size={18} className="text-green-500 shrink-0" />
                            Everything in Pro
                        </li>

                        <li className="flex items-center gap-2">
                            <Check size={18} className="text-green-500 shrink-0" />
                            Team collaboration
                        </li>

                        <li className="flex items-center gap-2">
                            <Check size={18} className="text-green-500 shrink-0" />
                            Custom integrations
                        </li>

                        <li className="flex items-center gap-2">
                            <Check size={18} className="text-green-500 shrink-0" />
                            Dedicated support
                        </li>

                        <li className="flex items-center gap-2">
                            <Check size={18} className="text-green-500 shrink-0" />
                            SLA guarantee
                        </li>

                        <li className="flex items-center gap-2">
                            <Check size={18} className="text-green-500 shrink-0" />
                            Custom branding
                        </li>

                    </ul>

                    <button className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-2 rounded-full">
                        Contact Sales
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Pricing;