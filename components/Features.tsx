"use client";

import { Card } from 'flowbite-react';

export default function Features() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Designed for business teams like yours
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">
            Here at BagScript we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          {[
            { title: "Marketing", description: "Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan." },
            { title: "Legal", description: "Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you." },
            { title: "Business Automation", description: "Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new templates to help you get started." },
            { title: "Finance", description: "Audit-proof software built for critical financial operations like month-end close and quarterly budgeting." },
            { title: "Enterprise Design", description: "Craft beautiful, delightful experiences for both marketing and product with real cross-company collaboration." },
            { title: "Operations", description: "Keep your company's lights on with customizable, iterative, and structured workflows built for all efficient teams and individual." },
          ].map((feature, index) => (
            <Card key={index}>
              <h3 className="mb-2 text-xl font-bold dark:text-white">{feature.title}</h3>
              <p className="text-gray-500 dark:text-gray-400">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}