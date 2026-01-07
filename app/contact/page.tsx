'use client';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Phone, MapPin, Clock, Globe, MessageCircle, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
const formSchema = z.object({
    fullName: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    company: z.string().optional(),
    phone: z.string().optional(),
    service: z.string().min(1, "Please select a service"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});
export default function ContactPage() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            email: "",
            company: "",
            phone: "",
            service: "",
            message: "",
        },
    });
    function onSubmit(values: z.infer<typeof formSchema>) {
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        })
            .then((response) => {
                if (response.ok) {
                    alert("Message sent! We'll get back to you within 24 hours.");
                    form.reset();
                } else {
                    alert('Failed to send message. Please try again.');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Failed to send message. Please try again.');
            });
    }
    const contactMethods = [
        {
            icon: Mail,
            color: "from-blue-500 to-cyan-500",
            title: "Email Us",
            primary: "<contact@mrventure.com>",
            secondary: "We reply within 24 hours",
        },
        {
            icon: Phone,
            color: "from-green-500 to-emerald-500",
            title: "Call Us",
            primary: "+91 6306654563",
            secondary: "Mon-Fri 9am-6pm EST",
        },
        {
            icon: MapPin,
            color: "from-purple-500 to-pink-500",
            title: "Visit Us",
            primary: "Noida Sector 66, Uttar Pradesh",
            secondary: "India",
        },
        {
            icon: Clock,
            color: "from-orange-500 to-red-500",
            title: "Working Hours",
            primary: "Mon - Fri",
            secondary: "9:00 AM - 6:00 PM EST",
        },
    ];
    const highlights = [
        {
            icon: Globe,
            color: "from-purple-500 to-pink-500",
            title: "Global Presence",
            desc: "Offices in Noida, Uttar Pradesh and clients worldwide",
        },
        {
            icon: MessageCircle,
            color: "from-green-500 to-emerald-500",
            title: "Quick Response",
            desc: "Average response time of less than 2 hours during business hours",
        },
        {
            icon: Lightbulb,
            color: "from-pink-500 to-rose-500",
            title: "Expert Consultation",
            desc: "Free 30-minute consultation with our solution architects",
        },
    ];
    return (
        <>
            {/* Hero Section */}
            <section className="py-32 bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 text-white text-center">
                <div className="max-w-6xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Badge className="bg-white/20 backdrop-blur border-white/30 text-white px-6 py-3 mb-8 text-lg">
                            Get in Touch
                        </Badge>
                        <h1 className="text-5xl lg:text-6xl font-normal mb-8">Let's Build Something Amazing</h1>
                        <p className="text-xl opacity-90 max-w-3xl mx-auto">
                            Have a project in mind? We'd love to hear from you. Send us a message and we'll respond within 24 hours.
                        </p>
                    </motion.div>
                    {/* Contact Methods */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
                        {contactMethods.map((method, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white/10 backdrop-blur rounded-3xl p-8 hover:bg-white/20 transition-all"
                            >
                                <div className={`w-16 h-16 ${method.color} rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg}`}>
                                    <method.icon className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{method.title}</h3>
                                <p className="text-lg font-medium mb-2">{method.primary}</p>
                                <p className="text-sm opacity-80">{method.secondary}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Contact Form + Highlights */}
            <section className="py-20 bg-purple-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Left: Highlights */}
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-4xl font-normal text-gray-900 mb-6">Send Us a Message</h2>
                                <p className="text-xl text-gray-600">Fill out the form and our team will get back to you within 24 hours.</p>
                            </div>
                            {highlights.map((highlight, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start gap-6"
                                >
                                    <div className={`w-15 h-15 ${highlight.color} bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 rounded-2xl  flex items-center justify-center flex-shrink-0 shadow-lg`}>
                                        <highlight.icon className="w-10 h-10 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-normal text-gray-900 mb-2">{highlight.title}</h3>
                                        <p className="text-gray-600">{highlight.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                            <div>
                                <p className="text-lg text-gray-700 mb-6">Follow us on social media</p>
                                <div className="flex gap-4">
                                    {['L', 'T', 'F', 'G'].map((platform) => (
                                        <div key={platform} className="bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow hover:shadow-lg transition cursor-pointer">
                                            <span className="text-xl font-bold text-white">{platform}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* Right: Form */}
                        <Card className="p-12 shadow-2xl">
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                    <div className="grid grid-cols-2 gap-6">
                                        <FormField
                                            control={form.control}
                                            name="fullName"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Full Name *</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="John Doe" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Email Address *</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="<john@example.com>" type="email" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-6">
                                        <FormField
                                            control={form.control}
                                            name="company"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Company Name</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Your Company" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="phone"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Phone Number</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="+1 (555) 123-4567" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <FormField
                                        control={form.control}
                                        name="service"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Interested Service *</FormLabel>
                                                <FormControl>
                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                        <SelectTrigger
                                                            className="
                                                                h-12
                                                                border border-gray-300
                                                                rounded-xl
                                                                bg-white
                                                                px-4
                                                                text-gray-900
                                                                shadow-sm
                                                                focus:ring-2 focus:ring-purple-500
                                                                focus:border-purple-500
                                                                transition
                                                            "
                                                        >
                                                            <SelectValue placeholder="Select a service" />
                                                        </SelectTrigger>

                                                        <SelectContent
                                                            className="
                                                                z-50
                                                                mt-2
                                                                rounded-xl
                                                                border border-gray-200
                                                                bg-white
                                                                shadow-xl
                                                                p-1
                                                            "
                                                        >
                                                            {[
                                                                { value: 'ecommerce', label: 'Ecommerce Solutions' },
                                                                { value: 'school', label: 'School Management' },
                                                                { value: 'hospital', label: 'Hospital Management' },
                                                                { value: 'custom', label: 'Custom Development' },
                                                                { value: 'consultation', label: 'Consultation' },
                                                            ].map((item) => (
                                                                <SelectItem
                                                                    key={item.value}
                                                                    value={item.value}
                                                                    className="
                                                                        cursor-pointer
                                                                        rounded-lg
                                                                        px-4
                                                                        py-3
                                                                        text-black
                                                                        focus:bg-purple-100
                                                                        data-[state=checked]:bg-purple-600
                                                                        data-[state=checked]:text-white
                                                                        transition
                                                                    "
                                                                >
                                                                    {item.label}
                                                                </SelectItem>
                                                            ))}
                                                        </SelectContent>
                                                    </Select>
                                                </FormControl>

                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="message"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Message *</FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        placeholder="Tell us about your project..."
                                                        className="min-h-48"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white rounded-full py-5 text-xl font-normal shadow-2xl"
                                    >
                                        Send Message
                                    </Button>
                                    <p className="text-center text-sm text-gray-500">
                                        By submitting this form, you agree to our{' '}
                                        <a href="#" className="text-purple-600 hover:underline">Terms of Service</a> and{' '}
                                        <a href="#" className="text-purple-600 hover:underline">Privacy Policy</a>
                                    </p>
                                </form>
                            </Form>
                        </Card>
                    </div>
                </div>
            </section>
            {/* Map */}
            <section className="py-20 bg-purple-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="bg-purple-100 rounded-3xl p-16 text-center shadow-xl">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                            <MapPin className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-2xl font-normal text-gray-900 mb-2">Interactive Map</h3>
                        <p className="text-xl text-gray-600">Noida Sector 66, Uttar Pradesh</p>
                        <div className="mt-12 rounded-3xl overflow-hidden shadow-xl">
                            <iframe
                                src="https://maps.google.com/maps?q=Noida%20Sector%2066&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="400"
                                style={{ border: 0 }}
                                //                 allowFullScreen =""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}