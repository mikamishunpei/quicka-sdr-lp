import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Layout, Pointer, Zap } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface TabContent {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  imageSrc?: string;
  imageAlt?: string;
  visual?: React.ReactNode;
}

interface Tab {
  value: string;
  icon: React.ReactNode;
  label: string;
  content: TabContent;
}

interface Feature108Props {
  badge?: string;
  heading?: string;
  description?: string;
  tabs?: Tab[];
}

const Feature108 = ({
  badge = "shadcnblocks.com",
  heading = "A Collection of Components Built With Shadcn & Tailwind",
  description = "Join us to build flawless web solutions.",
  tabs = [
    {
      value: "tab-1",
      icon: <Zap className="h-auto w-4 shrink-0" />,
      label: "Boost Revenue",
      content: {
        badge: "Modern Tactics",
        title: "Make your site a true standout.",
        description:
          "Discover new web trends that help you craft sleek, highly functional sites that drive traffic and convert leads into customers.",
        buttonText: "See Plans",
        imageSrc:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&ixlib=rb-4.0.3",
        imageAlt: "placeholder",
      },
    },
    {
      value: "tab-2",
      icon: <Pointer className="h-auto w-4 shrink-0" />,
      label: "Higher Engagement",
      content: {
        badge: "Expert Features",
        title: "Boost your site with top-tier design.",
        description:
          "Use stellar design to easily engage users and strengthen their loyalty. Create a seamless experience that keeps them coming back for more.",
        buttonText: "See Tools",
        imageSrc:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
        imageAlt: "placeholder",
      },
    },
    {
      value: "tab-3",
      icon: <Layout className="h-auto w-4 shrink-0" />,
      label: "Stunning Layouts",
      content: {
        badge: "Elite Solutions",
        title: "Build an advanced web experience.",
        description:
          "Lift your brand with modern tech that grabs attention and drives action. Create a digital experience that stands out from the crowd.",
        buttonText: "See Options",
        imageSrc:
          "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
        imageAlt: "placeholder",
      },
    },
  ],
}: Feature108Props) => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          <Badge variant="outline" className="text-brand-gold border-brand-gold">{badge}</Badge>
          <h1 className="max-w-2xl text-3xl font-semibold md:text-4xl text-[#0a0d0c]">
            {heading}
          </h1>
          <p className="text-[#666]">{description}</p>
        </div>
        <Tabs defaultValue={tabs[0].value} className="mt-8">
          <TabsList className="w-full px-2 sm:container flex flex-row items-center justify-center gap-1 sm:gap-4 md:gap-10">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex flex-1 sm:flex-none items-center justify-center gap-1 sm:gap-2 rounded-lg sm:rounded-xl px-1 py-2 sm:px-4 sm:py-3 text-[10px] xs:text-[11px] sm:text-sm font-semibold text-gray-400 data-[state=active]:bg-gray-100 data-[state=active]:text-[#0a0d0c] cursor-pointer transition-colors whitespace-nowrap"
              >
                <div className="scale-75 sm:scale-100">{tab.icon}</div>
                <span className="truncate">{tab.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="mx-auto mt-8 max-w-screen-xl rounded-2xl bg-white border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)] p-6 lg:p-16">
            {tabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="grid place-items-center gap-20 lg:grid-cols-2 lg:gap-10 data-[state=inactive]:hidden"
              >
                <div className="flex flex-col gap-5 text-left">
                  <Badge variant="outline" className="w-fit bg-background text-[#0a0d0c]">
                    {tab.content.badge}
                  </Badge>
                  <h3 className="text-3xl font-semibold lg:text-5xl text-[#0a0d0c]">
                    {tab.content.title}
                  </h3>
                  <p className="text-[#666] lg:text-lg">
                    {tab.content.description}
                  </p>
                  {/* <Button className="mt-2.5 w-fit gap-2 bg-[#0a0d0c] text-white hover:bg-[#0a0d0c]/90" size="lg">
                    {tab.content.buttonText}
                  </Button> */}
                </div>
                <div className="w-full aspect-square lg:aspect-[4/3] rounded-xl overflow-hidden shadow-md bg-gray-50 flex items-center justify-center relative">
                  {tab.content.visual ? (
                    tab.content.visual
                  ) : (
                    <img
                      src={tab.content.imageSrc}
                      alt={tab.content.imageAlt}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export { Feature108 };
