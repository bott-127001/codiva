"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MessageSquare, Send, CheckCircle, Github, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/codiva_labs/',
    icon: Instagram,
    description: '@codiva_labs',
    enabled: true
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/codiva_tech',
    icon: Twitter,
    description: '@codiva_tech',
    enabled: false
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com/codiva.tech',
    icon: Facebook,
    description: 'codiva.tech',
    enabled: false
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/company/codiva',
    icon: Linkedin,
    description: 'Yet to reach',
    enabled: false
  }
];

export function ContactSection() {
  const { toast } = useToast();

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Ready to start your next project? Let's discuss how we can help bring your vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="glass-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <MessageSquare className="h-6 w-6 text-codiva-blue" />
                  Send us a message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form
                  action="https://formspree.io/f/mzzvejnk"
                  method="POST"
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project, requirements, or any questions you have..."
                      required
                      rows={6}
                      className="resize-none"
                    />
                  </div>

                  {/* Spam protection */}
                  <input type="text" name="_gotcha" style={{ display: 'none' }} />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-12 bg-codiva-blue hover:bg-codiva-blue/90 text-white font-semibold transition-all duration-300"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Direct Contact */}
            <Card className="glass-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Mail className="h-6 w-6 text-codiva-purple" />
                  Direct Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Email Us</h4>
                  <p className="text-muted-foreground">
                    For business inquiries and partnerships
                  </p>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-codiva-blue hover:text-codiva-blue/80"
                    onClick={() => window.open('mailto:hello@codiva.tech', '_blank')}
                  >
                    hello@codiva.tech
                  </Button>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Response Time</h4>
                  <p className="text-muted-foreground">
                    We typically respond within 24 hours on business days
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="glass-card border-0">
              <CardHeader>
                <CardTitle className="text-2xl">Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <motion.button
                        key={social.name}
                        onClick={() => {
                          if (social.enabled) {
                            window.open(social.url, '_blank');
                          } else {
                            toast({
                              title: 'Yet to open',
                              description: `${social.name} is not available yet.`,
                              variant: 'default',
                            });
                          }
                        }}
                        className={`flex items-center gap-3 p-4 rounded-lg bg-background/50 transition-all duration-200 text-left group ${!social.enabled ? 'opacity-60 cursor-not-allowed' : 'hover:bg-codiva-blue/10 hover:text-codiva-blue'}`}
                        whileHover={social.enabled ? { scale: 1.02 } : {}}
                        whileTap={social.enabled ? { scale: 0.98 } : {}}
                        disabled={!social.enabled}
                      >
                        <Icon className="h-5 w-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                        <div className="min-w-0">
                          <p className="font-medium text-sm">{social.name}</p>
                          <p className="text-xs text-muted-foreground truncate">
                            {social.description}
                          </p>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center p-6 rounded-lg bg-gradient-to-r from-codiva-blue/10 via-codiva-purple/10 to-codiva-green/10 border border-codiva-blue/20"
            >
              <CheckCircle className="h-12 w-12 text-codiva-green mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Ready to Start?</h3>
              <p className="text-muted-foreground text-sm">
                Let's discuss your project and turn your ideas into reality
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

console.log('Contact section component loaded');