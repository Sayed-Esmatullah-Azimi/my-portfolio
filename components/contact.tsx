"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "sayedesmatullahazimi@gmail.com",
    href: "mailto:sayedesmatullahazimi@gmail.com",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+93 76 479 10 21",
    href: "https://wa.me/93764791021?text=Hello%20Azimi,%20I%20would%20like%20to%20contact%20you",
  },

  {
    icon: MapPin,
    label: "Location",
    value: "Kabul, Afghanistan",
    href: null,
  },
];

export function Contact() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Get In Touch
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              To get in touch, simply click on my email address or WhatsApp
              number above. I’m open to new opportunities and will respond as
              soon as possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2 space-y-4"
            >
              {contactInfo.map((info, index) => (
                <Card key={info.label} className="glass">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="font-medium hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium">{info.value}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Availability Card */}
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <Card className="glass">
                <CardContent className="p-6">
                  <Card className="glass border-primary/20">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                        </span>
                        <span className="font-medium">Available for hire</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Open to full-time positions, freelance projects, and
                        remote opportunities.
                      </p>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
